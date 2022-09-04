import { getAuth, signInWithPopup } from "firebase/auth";
import { google } from "./firebaseConfig";

export const loginGoogle = () => {
  return () => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then()
      .catch((err) => console.log(err));
  };
};
