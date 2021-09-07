import Avatar from "components/Avatar";
import styles from "./styles"

export default function Devit ({ avatar, userName, content, createdAt, id }) {
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
                        <date>{createdAt}</date>
                    </header>
                    <p>{content}</p>
                </section>
            </article>
            <style jsx>{styles}</style>
        </>
    )
}