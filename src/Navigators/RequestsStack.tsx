import { NavigationConstants } from "@constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateDonationRequest, Requests, OtherProfile } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<RequestStackParamList>();

export const RequestsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="OtherProfile" component={OtherProfile} />
      <Stack.Screen
        name="CreateDonationRequest"
        component={CreateDonationRequest}
      />
    </Stack.Navigator>
  );
};
