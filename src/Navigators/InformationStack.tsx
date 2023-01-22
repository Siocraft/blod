import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditProfile, Information, Profile, Requirements } from "@screens";
import React from "react";

const Stack = createNativeStackNavigator<InformationStackParamList>();

export const InformationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="DonationRequirements" component={Requirements} />
    </Stack.Navigator>
  );
};
