import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const getAuthUserFromLocalStorage = () => {
  const user = localStorage.getItem("authUser");

  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};

export const useAuthListener = () => {
  const [user, setUser] = useState<User | null>(getAuthUserFromLocalStorage());

  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = onAuthStateChanged(auth!, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return listener;
  }, [auth]);

  return { user };
};
