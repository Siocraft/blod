import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Information, Menu, Profile } from "@screens";
import React, { FC, useState } from "react";
import { RequestsStack } from "./RequestsStack";
// @ts-expect-error No typings available
import TabBar from "enhanced-fluid-bottom-navigation-bar";
import { View } from "react-native";
import { ColorsEnum } from "@theme";
import { useAppNavigation } from "@hooks";

const FluidTabBar: FC = () => {
  const {
    navigateToProfile,
    navigateToRequests,
    navigateToMenu,
    navigateToInformation,
  } = useAppNavigation();

  const [tabsTintColor, setTabsTintColor] = useState<string>(
    ColorsEnum.primary
  );

  const handlePress = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        tabsTintColor !== ColorsEnum.primary &&
          setTabsTintColor(ColorsEnum.primary);
        navigateToRequests();
        break;
      case 1:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
        navigateToProfile();
        break;
      case 2:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
        navigateToInformation();
        break;
      case 3:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
        navigateToMenu();
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <TabBar
        onPress={handlePress}
        tintColor={tabsTintColor}
        values={[
          {
            title: "Solicitudes",
            icon: "heartbeat",
            iconSet: "FontAwesome5",
            size: 32,
          },
          {
            title: "Perfil",
            icon: "user-alt",
            iconSet: "FontAwesome5",
            size: 32,
          },
          {
            title: "Información",
            icon: "information",
            iconSet: "MaterialCommunityIcons",
            size: 32,
          },
          {
            title: "Menú",
            icon: "menu",
            iconSet: "Feather",
            size: 32,
          },
        ]}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
      }}
      tabBar={() => <FluidTabBar />}
    >
      <Tab.Screen name="Requests" component={RequestsStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Information" component={Information} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};
