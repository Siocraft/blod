import { StackActions, useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation();
  const { navigate, goBack,  } = navigation;

  return {
    // @ts-expect-error Some navigation types are wrong
    navigateToOtherProfile: (userId: string) => navigate("OtherProfile", { userId }),
    navigateToApp: () => navigation.dispatch(
      StackActions.replace('App')
      ),
      navigateToAuth: () => navigation.reset({
        index: 0,
        // @ts-expect-error Some navigation types are wrong
        routes: [{ name: 'Authentication' }],
      }),
    // @ts-expect-error Some navigation types are wrong
    navigateToLogin: () => navigate("Login"),
    // @ts-expect-error Some navigation types are wrong
    navigateToSignup: () => navigate("Login"),
    goBack,
  };
}