import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "@screens";
import React, { FC } from "react";
import { RequestsStack } from "./RequestsStack";

const Tab = createBottomTabNavigator();

export const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Tab.Screen name="Requests" component={RequestsStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
