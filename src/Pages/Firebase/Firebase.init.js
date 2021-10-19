import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const authentication = () =>{
    initializeApp(firebaseConfig);
}
export default authentication;