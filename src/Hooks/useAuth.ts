import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from 'react';

const auth = getAuth();

export const useAuth = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(undefined);
    });

    return unsubscribe;
  }, []);

  return {
    user
  };
}