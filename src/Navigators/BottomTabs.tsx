import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing, Profile } from "@screens";
import React, { FC } from "react";

const Tab = createBottomTabNavigator();

export const BottomTabs: FC = () => {
  return <Tab.Navigator screenOptions={{
    header: () => null
  }}>
    <Tab.Screen name="Requests" component={Landing} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
}