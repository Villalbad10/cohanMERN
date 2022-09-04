import { getAuth, signOut } from "firebase/auth";
export const logout = () => {
  return () => {
    const auth = getAuth();
    signOut(auth)
      .then()
      .catch((error) => console.log(error));
  };
};
