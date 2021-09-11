const admin = require("firebase-admin");

const serviceAccount = require(JSON.parse(process.env.FIREBASE_KEYS));

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} catch(e){}


export const firestore = admin.firestore()