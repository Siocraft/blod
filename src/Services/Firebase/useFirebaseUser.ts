// import { setLoading, useAppDispatch } from "@store";
import * as SplashScreen from "expo-splash-screen";
import { NextOrObserver, User, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export const useFirebaseUser = () => {
  const [user, setUser] = useState<User | null>(null);
  // const dispatch = useAppDispatch();
  const onAuthStateChanged: NextOrObserver<User | null> = user => {
    setUser(user);
    // dispatch(setLoading(false));
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return user;
};
