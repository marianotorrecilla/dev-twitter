import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBPhbM8ZKMQbrAJC-CPloHK7EVRYHGVPMk",
    authDomain: "dev-twitter-ae889.firebaseapp.com",
    projectId: "dev-twitter-ae889",
    storageBucket: "dev-twitter-ae889.appspot.com",
    messagingSenderId: "626392770770",
    appId: "1:626392770770:web:78b91ea49be1401309a50b",
    measurementId: "G-HB6C4S9Q3R"
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL, uid} = user
    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged(user => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = ({avatar, content, userId, userName}) => {
    return db.collection('dev-tweets').add({
        avatar,
        content,
        userId,
        userName,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        likesCount: 0,
        sharedCount: 0
    })
}

export const fetchLatestDevits = () => {
    return db.collection('dev-tweets')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                const {createdAt} = data
                const date = new Date(createdAt.seconds * 1000)
                const normalizedCreatedAt = new Intl.DateTimeFormat("es-AR").format(date)

                return {
                    ...data,
                    id,
                    createdAt: normalizedCreatedAt
                }
            })
        })
}