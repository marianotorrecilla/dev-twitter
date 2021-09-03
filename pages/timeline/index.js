import Head from 'next/head'
import Link from 'next/link'
import AppLayout from '../../components/AppLayout'

export default function Timeline ({ userName }) {
    return (
        <>
            <Head>
                <title>Dev Twitter | Timeline</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <AppLayout>
                <h1>This is the timeline of {userName}</h1>
                <nav>
                    <Link href="/" className="Link-a">
                        <a>Go home!</a>
                    </Link>
                </nav>
            </AppLayout>
            
            <style jsx>{`
                h1 {
                    text-align: center;
                    font-size: 48px;
                }

                nav {
                    font-size: 24px;
                    text-align: center;
                }

                a {
                    color: #09f;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}