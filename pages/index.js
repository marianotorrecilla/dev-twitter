import { useEffect } from 'react'
import Head from 'next/head'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import { colors } from 'styles/theme'
import { loginWithGitHub } from 'firebase/client'
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from 'hooks/useUser'

export default function Home() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      
      <Head>
        <title>Dev Twitter | Home</title>
        <meta name="description" content="The social space for developers" />
      </Head>

        <section>
          <main>
            <img src='/dev-twitter.jpg' alt='dev-twitter'/>
            <h1>
              dev-twitter
            </h1>
            <h2>Talk about development with developers</h2>
            <div>
              {
                user === USER_STATES.NOT_LOGGED && <Button onClick={handleClick}>
                  <GitHub fill={`${colors.white}`} width={24} height={24} />
                  Login with GitHub
                </Button>
              }
              {
                user === USER_STATES.NOT_KNOWN && <span>Loading...</span>
              }
            </div>
          </main>
        </section>

      <style jsx>{`

        section {
          display: grid;
          height: 80vh;
          place-items: center;
        }

        main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        img {
          width: 120px;
          border: 1px solid #000000;
          border-radius: 80px;
        }

        div {
          margin-top: 8px;
        }

        h1 {
          color: ${colors.black};
          font-size: 24px;
          margin-bottom: 10px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 16px;
          margin: 0;
        }

      `}</style>
    </div>
  );
}