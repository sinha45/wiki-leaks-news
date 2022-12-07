// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfqhej0XlBc8OMVF-BxK-uAY8RHfCHbro",
    authDomain: "wiki-leaks-news.firebaseapp.com",
    projectId: "wiki-leaks-news",
    storageBucket: "wiki-leaks-news.appspot.com",
    messagingSenderId: "826265917717",
    appId: "1:826265917717:web:7dbc188a529a183808711c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;