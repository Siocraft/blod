import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const withNavigation = (Component: React.FC) => {
  return () => {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Component />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  };
}