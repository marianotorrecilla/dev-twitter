import { useEffect, useState } from 'react';
import Head from "next/head";
import Button from 'components/Button';
import useUser from 'hooks/useUser';
import { addDevit, upLoadImage } from "firebase/client"
import { useRouter } from 'next/router';
import Avatar from 'components/Avatar';

const COMPOSE_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
}

export default function ComposeTweet () {
    const user = useUser()
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN)
    
    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgURL, setImgURL] = useState(null)

    const router = useRouter()

    useEffect(() => {
        if (task) {
            const onProgress = () => {}
            const onError = () => {}
            const onComplete = () => {
                console.log('onComplete');
                task.snapshot.ref.getDownloadURL().then(setImgURL)
            }

            task.on('state_changed',
            onProgress,
            onError,
            onComplete
            )
        }
    }, [task])

    const handleChange = (e) => {
        const {value} = e.target
        setMessage(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username,
            img: imgURL
        }).then(() => {
            router.push('/home')
        }).catch(err => {
            console.log(err);
            setStatus(COMPOSE_STATES.ERROR)
        })
    }

    const isButtonDisabled = message.length === 0 || status === COMPOSE_STATES.LOADING

    const handleDragEnter = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
    }

    const handleDrop = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
        const file = e.dataTransfer.files[0]
        const task = upLoadImage(file)
        setTask(task)
    }

    return (
        <>
                <Head>
                    <title>Crear un dev-tweet</title>
                </Head>
                <section className='form-container'>
                    {user && (
                        <section className='avatar-container'>
                            <Avatar src={user.avatar} />
                        </section>
                    )}
                    <form onSubmit={handleSubmit}>
                        <textarea 
                            onChange={handleChange}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            placeholder="¿Qué esta pasando?"
                            value={message}
                        ></textarea>
                        {imgURL && (
                            <section className='remove-img'>
                                <button onClick={() => setImgURL(null)}>x</button>
                                <img src={imgURL}/>
                            </section>
                        )}
                        <div>
                            <Button disabled={isButtonDisabled}>Dev-Tweet</Button>
                        </div>
                    </form>
                </section>
                
            <style jsx>{`
                div {
                    padding: 15px;
                }

                button {
                    background: rgba(0, 0, 0, 0.3);
                    border: 0;
                    border-radius: 999px;
                    color: #fff;
                    font-size: 24px;
                    width: 30px;
                    height: 30px;
                    top: 15px;
                    position: absolute;
                    right: 15px;
                    
                }

                .form-container {
                    align-items: flex-start;
                    display: flex;
                }

                .avatar-container {
                    padding-top: 20px;
                    padding-left: 10px;
                }

                .remove-img {
                    position: relative;
                }

                form {
                    padding: 10px;
                }

                img {
                    border-radius: 10px;
                    height: auto;
                    width: 100%;
                }

                textarea {
                    border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? '3px dashed #09f' : '3px solid transparent'};
                    border-radius: 10px;
                    padding: 15px;
                    resize: none;
                    font-size: 21px;
                    min-height: 200px;
                    outline: 0;
                    width: 100%;
                }
            `}</style>
        </>
    )
}