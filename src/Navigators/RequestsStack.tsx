import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, OtherProfile, RequestDetails } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<RequestStackParamList>();

export const RequestsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} />
    </Stack.Navigator>
  );
};
