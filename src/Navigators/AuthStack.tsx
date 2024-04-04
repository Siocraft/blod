import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Authentication, CompleteSignup, Login, Signup } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CompleteSignup" component={CompleteSignup} />
    </Stack.Navigator>
  );
};
