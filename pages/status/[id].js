import Devit from "components/Devit";
import CreateIcon from "components/Icons/Create";
import HomeIcon from "components/Icons/HomeIcon";
import Search from "components/Icons/Search";
import { firestore } from "firebase/admin";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from 'next/link'
import { colors } from "styles/theme";
import Loading from "components/Loading";


export default function DevitPage(props) {
    const router = useRouter()

    if (router.isFallback){
        return <Loading />
    } 

    return (
        <>
            <Head>
                <title>Dev-tweet | {props.userName}</title>
            </Head>
            <header>
                <h2>Dev-tweet de {props.userName}</h2>
            </header>

            <section>
                <Devit {...props}/>
            </section>
            
            <nav>
                <Link href="/home">
                    <a>
                        <HomeIcon stroke="#000" width={32} height={32}/>
                    </a>
                </Link>
                <Link href="/search">
                    <a>
                        <Search stroke="#000" width={32} height={32}/>
                    </a>
                </Link>
                <Link href="/compose/tweet">
                    <a>
                        <CreateIcon stroke="#000" width={32} height={32}/>
                    </a>
                </Link>
            </nav>
            <style jsx>{`
                header {
                    align-items: center;
                    background: rgba(180, 155, 200, 0.9);
                    backdrop-filter: blur(5px);
                    border-bottom: 1px solid #28e269;
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

                section {
                    flex: 1;
                }

                nav {
                    background: ${colors.primary};
                    border-top: 1px solid #28e269;
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
                    background: radial-gradient(#28e269 15%, transparent 15%);
                    background-size: 180px 180px;
                    background-position: center;
                }

                nav a:hover > :global(svg) {
                    stroke: ${colors.black}
                }
            `}</style>
        </>
    )
}

/**
 * example getStaticPaths and getStaticProps
 */

export async function getStaticPaths () {
    return {
        paths: [{ params: { id: "Zglkuf4IEWSOvU8IRDLu" } }],
        fallback: true,
    }
}

export async function getStaticProps (context) {
    const { params } = context
    const { id } = params

    return firestore.collection('dev-tweets').doc(id).get()
        .then(doc => {
            const data = doc.data()
            const id = doc.id
            const {createdAt} = data
                
            const props = {
                ...data,
                id,
                createdAt: +createdAt.toDate(),
            }
            return {props}
        })
        .catch(() => {
            return { props: {} }
        })
}

/**
 * example getServerSideProps
 */

/*export async function getServerSideProps (context) {
    const { params, res } = context
    const { id } = params

    const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`)
    if (apiResponse.ok) {
        const props = await apiResponse.json()
        return {props}
    }
    if (res) {
        res.writeHead(301, { Location: "/home" }).end()
    }
}*/

/**
 * example getInitialProps
 */

/*DevitPage.getInitialProps = (context) => {
    const { query, res } = context
    const { id } = query

    return fetch(`http://localhost:3000/api/devits/${id}`)
        .then(apiResponse => {
            if (apiResponse.ok) return apiResponse.json()
            if (res) {
                res.writeHead(301, { Location: "/home" }).end()
            }
        })
}*/