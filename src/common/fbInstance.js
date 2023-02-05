import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  deleteDoc,
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
  const target = await targetDoc(id);
  const result = await findTactics(target);
  if (!Boolean(result)) {
    console.log("ID 존재..");
    return false;
  }
  try {
    await setDoc(target, {
      ...values,
      timstamp: serverTimestamp(),
    });
    return true;
  } catch (err) {
    console.log("addTactics err", err);
    return false;
  }
}

export async function delTactics(id) {
  const target = await targetDoc(id);
  const result = await findTactics(target);
  if (!Boolean(result)) {
    console.log("ID 미존재..");
    return false;
  }
  try {
    await deleteDoc(target);
    return true;
  } catch (err) {
    console.log("deleteTactics err", err);
    return false;
  }
}

export async function findTactics(target) {
  //const d = await targetDoc(id);
  const tactics = await getDoc(target);
  if (tactics) return tactics;
  return null;
}

export async function targetDoc(id) {
  const d = doc(fs, "tactics", id);
  return d;
}
