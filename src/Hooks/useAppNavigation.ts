import { NavigationConstants } from "@constants";
import { StackActions, useNavigation } from "@react-navigation/native";
import { SignUpFormValues } from "@screens";

export const useAppNavigation = () => {
  const navigation = useNavigation();
  const { navigate, goBack, canGoBack } = navigation;

  return {
    navigateToOtherProfile: (userId: string) =>
      // @ts-expect-error Some navigation types are wrong
      navigate(NavigationConstants.Screens.OtherProfile, { userId }),
    navigateToApp: () =>
      navigation.dispatch(StackActions.replace(NavigationConstants.Root.App)),
    navigateToAuth: () =>
      navigation.reset({
        index: 0,
        // @ts-expect-error Some navigation types are wrong
        routes: [{ name: NavigationConstants.Root.Authentication }],
      }),
    // @ts-expect-error Some navigation types are wrong
    navigateToLogin: () => navigate(NavigationConstants.Screens.Login),
    // @ts-expect-error Some navigation types are wrong
    navigateToSignup: () => navigate(NavigationConstants.Screens.Signup),
    // @ts-expect-error Some navigation types are wrong
    navigateToRequests: () => navigate(NavigationConstants.Stacks.RequestStack),
    // @ts-expect-error Some navigation types are wrong
    navigateToProfile: () => navigate(NavigationConstants.Stacks.ProfileStack),
    navigateToEditProfile: () =>
      // @ts-expect-error Some navigation types are wrong
      navigate(NavigationConstants.Screens.EditProfile),
    navigateToInformation: () =>
      // @ts-expect-error Some navigation types are wrong
      navigate(NavigationConstants.Stacks.InformationStack),
    // @ts-expect-error Some navigation types are wrong
    navigateToMenu: () => navigate(NavigationConstants.Screens.Menu),
    navigateToCreateDonationRequest: () =>
      // @ts-expect-error Some navigation types are wrong
      navigate(NavigationConstants.Screens.CreateDonationRequest),
    navigateToCompleteSignup: (signupValues: SignUpFormValues) =>
      // @ts-expect-error Some navigation types are wrong
      navigate(NavigationConstants.Screens.CompleteSignup, {
        signupValues,
      }),
      // @ts-expect-error Some navigation types are wrong
    navigateToDonationRequirements: () => navigate(NavigationConstants.Screens.DonationRequirements),
      // @ts-expect-error Some navigation types are wrong
    navigateToRequestDetails: (requestId: string) => navigate(NavigationConstants.Screens.RequestDetails, {
      requestId
    }),
    // @ts-expect-error Some navigation types are wrong
    navigateToDonationTypes: () => navigate(NavigationConstants.Screens.DonationTypes),
    goBack,
    canGoBack,
  };
};
