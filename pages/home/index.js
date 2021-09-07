import { useEffect, useState } from "react";
import AppLayout from "components/AppLayout";
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import { fetchLatestDevits } from "firebase/client";

export default function HomePage () {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestDevits().then(setTimeline)
    }, [user])

    return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map(({ id, userName, avatar, content, userId, createdAt }) => {
                        return (
                            <Devit 
                                key={id}
                                userName={userName}
                                avatar={avatar}
                                content={content}
                                createdAt={createdAt}
                                id={id}
                                userId={userId}
                            />
                        )
                    })}
                </section>
                <nav>

                </nav>
            </AppLayout>
            <style jsx>{`

                header {
                    align-items: center;
                    background: #ffffffaa;
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid #eee;
                    display: flex;
                    height: 49px;
                    position: sticky;
                    top: 0;
                    width: 100%;
                }

                h2 {
                    font-size: 21px;
                    font-weight: 800;
                    padding-left: 15px;
                }

                nav {
                    background: #ffffff;
                    border-top: 1px solid #eee;
                    bottom: 0;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

            `}</style>
        </>
    )
}