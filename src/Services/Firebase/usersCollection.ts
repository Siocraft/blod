import { firestore } from "@config";
import { FirebaseEnum } from "@constants";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const usersCollection = collection(
  firestore,
  FirebaseEnum.Firestore.Collections.Users
);

export const getUsers = async () => {
  const users = await getDocs(usersCollection);
  return users;
};

export const getUser = async (id?: string) => {
  if (!id) return null;
  const user = await getDoc(doc(usersCollection, id));
  return user.data();
};

export const createUser = async (id: string) => {
  if (!id) return null;

  await setDoc(doc(usersCollection, id), {
    age: 18,
    name: "John Doe",
    location: "Earth",
    avatar: "https://i.pravatar.cc/150?img=1",
    litersDonated: 0,
    bloodType: "O+",
  });

  const user = await getDoc(doc(usersCollection, id));
  return user.data();
};

export const updateUser = async (id: string | undefined, data: any) => {
  if (!id) return null;
  await setDoc(doc(usersCollection, id), data, { merge: true });
  const user = await getDoc(doc(usersCollection, id));
  return user.data();
};
