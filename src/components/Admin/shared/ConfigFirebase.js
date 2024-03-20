import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXTMuuW5RwZe8KESsCGfZ6Ev8OdFXjvPk",
  authDomain: "feed-pet-11786.firebaseapp.com",
  projectId: "feed-pet-11786",
  storageBucket: "feed-pet-11786.appspot.com",
  messagingSenderId: "347376145632",
  appId: "1:347376145632:web:fdce3244fe43e7f4c36c85"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
