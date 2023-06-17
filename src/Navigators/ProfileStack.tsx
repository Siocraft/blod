import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateDonationRequest, EditProfile, Profile } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="CreateDonationRequest"
        component={CreateDonationRequest}
      />
    </Stack.Navigator>
  );
};
