import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCAbqHc-41Hij1HBl7c6gwQE_meRygMs84",
  authDomain: "explore-fc7da.firebaseapp.com",
  projectId: "explore-fc7da",
  storageBucket: "explore-fc7da.appspot.com",
  messagingSenderId: "295604836734",
  appId: "1:295604836734:web:63b5196ebcf1d11d2c7b2f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
const auth = getAuth(app)


export const login = async ({email, password}) => {
  let res = await signInWithEmailAndPassword( auth, email, password )
  return res
}

