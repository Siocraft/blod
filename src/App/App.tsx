import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useForegroundPermissions } from "expo-location";
import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "../Config/firebase";
import { queryClient } from "../Config/reactQuery";
import { LoadingContext } from "../Context";
import { RootStackNavigator } from "../Navigators";
import { Loading } from "../Screens/Loading";
import { store } from "../Services/Redux";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreLogs(["Setting a timer for a long period"]);
LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified."]);
LogBox.ignoreLogs(["(ADVICE) View ..."]);
LogBox.ignoreAllLogs(); //Ignore all log notifications

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setIsLoadingMessage] = useState("");
  const [status, requestPermission] = useForegroundPermissions();

  useEffect(() => {
    if (status !== null && status.canAskAgain && !status.granted) {
      requestPermission();
    }
  }, [status]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaProvider>
            <LoadingContext.Provider
              value={{
                loading: isLoading,
                message: loadingMessage,
                showLoading: (message: string) => {
                  setIsLoading(true);
                  setIsLoadingMessage(message);
                  return "";
                },
                hideLoading: () => {
                  setIsLoading(false);
                  setIsLoadingMessage("");
                },
              }}
            >
              {isLoading && <Loading />}
              <RootStackNavigator />
            </LoadingContext.Provider>
          </SafeAreaProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};
