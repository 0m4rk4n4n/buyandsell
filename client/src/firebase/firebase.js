import {initializeApp} from "firebase/app"
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCRwh3gPj21nj4zMrc09nF-QLjyKhE8_WY",
    authDomain: "web-app-a24db.firebaseapp.com",
    projectId: "web-app-a24db",
    storageBucket: "web-app-a24db.appspot.com",
    messagingSenderId: "913530975734",
    appId: "1:913530975734:web:4b8cce8d64970efc1b43d7",
    measurementId: "G-V694K8QCWV"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const provider=new GoogleAuthProvider()
export default app