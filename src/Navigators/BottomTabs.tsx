import { NavigationConstants } from "@constants";
import { useAppNavigation } from "@hooks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Information, Menu } from "@screens";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { ProfileStack } from "./ProfileStack";
import { RequestsStack } from "./RequestsStack";
// @ts-expect-error No typings available
import TabBar from "enhanced-fluid-bottom-navigation-bar";
import { View } from "react-native";
import { InformationStack } from "./InformationStack";

const FluidTabBar: FC = () => {
  const {
    navigateToProfile,
    navigateToRequests,
    navigateToMenu,
    navigateToInformation,
  } = useAppNavigation();

  const [tabsTintColor, setTabsTintColor] = useState<string>(
    ColorsEnum.secondary
  );

  const handlePress = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
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
            title: "Inicio",
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
      <Tab.Screen
        name={NavigationConstants.Stacks.RequestStack}
        component={RequestsStack}
      />
      <Tab.Screen
        name={NavigationConstants.Stacks.ProfileStack}
        component={ProfileStack}
      />
      <Tab.Screen
        name={NavigationConstants.Stacks.InformationStack}
        component={InformationStack}
      />
      <Tab.Screen name={NavigationConstants.Screens.Menu} component={Menu} />
    </Tab.Navigator>
  );
};
