import { Firestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";
import { createContext } from "react";

type FireBaseContext = {
  firebase: null | FirebaseApp;
  firestore: null | Firestore;
  auth: null | Auth;
};

const defaultContext = {
  firebase: null,
  firestore: null,
  auth: null,
};

export const FirebaseContext = createContext<FireBaseContext>(defaultContext);
