import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import "../Config/firebase";
import { queryClient } from "../Config/reactQuery";
import { RootStackNavigator } from "../Navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <RootStackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
