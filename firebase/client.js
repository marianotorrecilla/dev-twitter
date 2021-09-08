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

export const addDevit = ({avatar, content, img, userId, userName}) => {
    return db.collection('dev-tweets').add({
        avatar,
        content,
        img,
        userId,
        userName,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        likesCount: 0,
        sharedCount: 0
    })
}

export const fetchLatestDevits = () => {
    return db.collection('dev-tweets')
    .orderBy("createdAt", "desc")
        .get()
        .then(({ docs }) => {
            return docs.map(doc => {
                const data = doc.data()
                const id = doc.id
                const {createdAt} = data
                
                return {
                    ...data,
                    id,
                    createdAt: +createdAt.toDate(),
                }
            })
        })
}

export const upLoadImage = (file) => {
    const ref = firebase.storage().ref(`images/${file.name}`)
    const task = ref.put(file)
    return task
}