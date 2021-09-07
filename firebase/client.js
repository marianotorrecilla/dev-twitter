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

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL} = user
    return {
        avatar: photoURL,
        username: displayName,
        email
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