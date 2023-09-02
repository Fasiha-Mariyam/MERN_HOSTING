import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYkbnYkBbxJ8EjO3HiN2NBXItxUJzAtBU",
  authDomain: "trendbazaarapi.firebaseapp.com",
  projectId: "trendbazaarapi",
  storageBucket: "trendbazaarapi.appspot.com",
  messagingSenderId: "92068367333",
  appId: "1:92068367333:web:8022feae2d27bda7683d0c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);