import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDEID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEAUREMENTID,
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export async function getTactics() {
  const coll = collection(fs, "tactics", "/");
  const ddocs = (await getDocs(coll)).docs;
  return ddocs;
}

export async function addTactics(id, values) {
  const result = await findTactics(id);
  if (Boolean(result)) {
    return false;
  }
  try {
    await setDoc(doc(fs, "tactics", id), {
      ...values,
      timstamp: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.log("addTactics err", err);
    return false;
  }
}

export async function findTactics(id) {
  const tactics = await getDoc(doc(fs, "tactics", `${id}`));
  return tactics?.data();
}
