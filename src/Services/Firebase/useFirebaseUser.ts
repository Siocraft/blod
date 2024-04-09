// import { setLoading, useAppDispatch } from "@store";
import * as SplashScreen from "expo-splash-screen";
import { NextOrObserver, User as FirebaseUser , getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { firebaseDatabase } from "@config";
import { ErrorReporting } from "../Errors";

export const useFirebaseUser = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsloading] = useState(true);

  // const dispatch = useAppDispatch();
  const onAuthStateChanged: NextOrObserver<FirebaseUser | null> = user => {
    setUser(user);
    // dispatch(setLoading(false));
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    setIsloading(true);
    if (user) {
      get(ref(firebaseDatabase, `/users/${user.uid}`))
        .then(snapshot => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserData(userData);
          }
        })
        .catch(ErrorReporting)
        .finally(() => setIsloading(false));
    }
  }, [user])

  return { user, userData, isLoading };
};
