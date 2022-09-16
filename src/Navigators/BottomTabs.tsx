import React, { FC } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing } from "@screens";

const Tab = createBottomTabNavigator();

export const BottomTabs: FC = () => {
  return <Tab.Navigator screenOptions={{
    header: () => null
  }}>
    <Tab.Screen name="First" component={Landing} />
    <Tab.Screen name="Second" component={Landing} />
  </Tab.Navigator>
}