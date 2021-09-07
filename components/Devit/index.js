import Avatar from "components/Avatar";
import styles from "./styles"

export default function Devit ({ avatar, username, message, id }) {
    return (
        <>
            <article>
                <div>
                    <Avatar
                        alt={username} 
                        src={avatar} 
                    />
                </div>
                
                <section>
                    <strong>{username}</strong>
                    <p>{message}</p>
                </section>
            </article>
            <style jsx>{styles}</style>
        </>
    )
}