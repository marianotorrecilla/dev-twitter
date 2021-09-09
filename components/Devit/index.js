import Avatar from "components/Avatar";
import Link from 'next/link'
import styles from "./styles"
import useTimeAgo from "hooks/useTimeAgo";
import { useRouter } from "next/router";

export default function Devit ({ avatar, userName, content, createdAt, id, img }) {
    const timeago = useTimeAgo(createdAt)
    const router = useRouter()

    const handleArticleClick = (e) => {
        e.preventDefault()
        router.push(`/status/${id}`)
    }

    return (
        <>
            <article onClick={handleArticleClick}>
                <div>
                    <Avatar
                        alt={userName} 
                        src={avatar} 
                    />
                </div>
                
                <section>
                    <header>
                        <strong>{userName}</strong>
                        <span> - </span>
                        <Link href={`/status/${id}`}>
                            <a>
                                <time>{timeago}</time>
                            </a>
                        </Link>
                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>
            <style jsx>{styles}</style>
        </>
    )
}