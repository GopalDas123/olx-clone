import firebase from 'firebase/app'
import 'firebase/auth'
const app=firebase.initializeApp({
    apiKey: "AIzaSyAFxlyDFfeDvwYbYE3zrOWWQ7lPyxeMcyI",
    authDomain: "olx-clone-by-gopal.firebaseapp.com",
    databaseURL: "https://olx-clone-by-gopal.firebaseio.com",
    projectId: "olx-clone-by-gopal",
    storageBucket: "olx-clone-by-gopal.appspot.com",
    messagingSenderId: "1021562960231",
    appId: "1:1021562960231:web:d3283d5699eb5eaa5417c2",
    measurementId: "G-8HPJNQBKY3"
})
export default app;
export const auth =app.auth()

