import Avatar from "components/Avatar";
import styles from "./styles"
import useTimeAgo from "hooks/useTimeAgo";

export default function Devit ({ avatar, userName, content, createdAt, id, img }) {
    const timeago = useTimeAgo(createdAt)

    return (
        <>
            <article>
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
                        <date>{timeago}</date>
                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>
            <style jsx>{styles}</style>
        </>
    )
}