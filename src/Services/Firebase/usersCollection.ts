import { firestore } from "@config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const usersCollection = collection(firestore, "users");

export const getUsers = async () => {
  const users = await getDocs(usersCollection);
  return users;
}

export const getUser = async (id?: string) => {
  if(!id) return null;
  const user = await getDoc(doc(usersCollection, id));
  console.log(user.data())
  return user.data();
}