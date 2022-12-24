import { StackActions, useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation();
  const { navigate, goBack } = navigation;

  return {
    navigateToOtherProfile: (userId: string) =>
      // @ts-expect-error Some navigation types are wrong
      navigate("OtherProfile", { userId }),
    navigateToApp: () => navigation.dispatch(StackActions.replace("App")),
    navigateToAuth: () =>
      navigation.reset({
        index: 0,
        // @ts-expect-error Some navigation types are wrong
        routes: [{ name: "Authentication" }],
      }),
    // @ts-expect-error Some navigation types are wrong
    navigateToLogin: () => navigate("Login"),
    // @ts-expect-error Some navigation types are wrong
    navigateToSignup: () => navigate("Signup"),
    // @ts-expect-error Some navigation types are wrong
    navigateToRequests: () => navigate("Requests"),
    // @ts-expect-error Some navigation types are wrong
    navigateToProfile: () => navigate("Profile"),
    // @ts-expect-error Some navigation types are wrong
    navigateToInformation: () => navigate("Information"),
    // @ts-expect-error Some navigation types are wrong
    navigateToMenu: () => navigate("Menu"),
    // @ts-expect-error Some navigation types are wrong
    navigateToCreateDonationRequest: () => navigate("CreateDonationRequest"),
    goBack,
  };
};
