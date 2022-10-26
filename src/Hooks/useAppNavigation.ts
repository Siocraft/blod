import { useNavigation } from "@react-navigation/native";

export const useAppNavigation = () => {
  const navigation = useNavigation();
  const { navigate, goBack } = navigation;

  return {
    // @ts-expect-error Some navigation types are wrong
    navigateToOtherProfile: (userId: string) => navigate("OtherProfile", { userId }),
    goBack,
  };
}