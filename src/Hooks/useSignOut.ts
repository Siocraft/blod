import { useAppNavigation } from "./useAppNavigation";
import { ErrorReporting } from "@services";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const useSignOut = () => {

  const { navigateToAuth } = useAppNavigation();
  
  const signOutFromApp = async () => {
    try {
      await signOut(auth)
      navigateToAuth()
    } catch (error) {
      ErrorReporting(error);
    }
  }

  return {
    signOutFromApp
  }
}