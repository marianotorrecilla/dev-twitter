import { useEffect, useState } from "react";
import Head from "next/head";
import Link from 'next/link'
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import { fetchLatestDevits } from "firebase/client";
import CreateIcon from "components/Icons/Create";
import HomeIcon from "components/Icons/HomeIcon";
import Search from "components/Icons/Search";
import { colors } from "styles/theme";

export default function HomePage () {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestDevits().then(setTimeline)
    }, [user])

    return (
        <>
                <Head>
                    <title>Dev-twitter | Inicio</title>
                </Head>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {timeline.map(({ id, userName, avatar, content, img, userId, createdAt }) => {
                        return (
                            <Devit 
                                key={id}
                                userName={userName}
                                avatar={avatar}
                                content={content}
                                createdAt={createdAt}
                                id={id}
                                img={img}
                                userId={userId}
                            />
                        )
                    })}
                </section>
                <nav>
                    <Link href="/home">
                        <a>
                            <HomeIcon stroke="#09f" width={32} height={32}/>
                        </a>
                    </Link>
                    <Link href="/search">
                        <a>
                            <Search stroke="#09f" width={32} height={32}/>
                        </a>
                    </Link>
                    <Link href="/compose/tweet">
                        <a>
                            <CreateIcon stroke="#09f" width={32} height={32}/>
                        </a>
                    </Link>
                </nav>
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

                section {
                    flex: 1;
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
                    display: flex;
                    height: 49px;
                    position: sticky;
                    width: 100%;
                }

                nav a {
                    align-items: center;
                    display: flex;
                    flex: 1 1 auto;
                    height: 100%;
                    justify-content: center;
                }

                nav a:hover {
                    background: radial-gradient(#0099ff44 15%, transparent 15%);
                    background-size: 180px 180px;
                    background-position: center;
                }

                nav a:hover > :global(svg) {
                    stroke: ${colors.primary}
                }
            `}</style>
        </>
    )
}