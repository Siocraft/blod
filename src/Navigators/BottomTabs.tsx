import { NavigationConstants } from "@constants";
import { useAppNavigation } from "@hooks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Hospitals } from "@screens";
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
    navigateToHospitals,
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
        tabsTintColor !== ColorsEnum.primary &&
          setTabsTintColor(ColorsEnum.primary);
        navigateToHospitals();
        break;
      case 2:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
        navigateToInformation();
        break;
      case 3:
        tabsTintColor !== ColorsEnum.secondary &&
          setTabsTintColor(ColorsEnum.secondary);
        navigateToProfile();
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
            title: "Hospitales",
            icon: "hospital",
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
            title: "Perfil",
            icon: "user-alt",
            iconSet: "FontAwesome5",
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
        name={NavigationConstants.Screens.Hospitals}
        component={Hospitals}
      />
      <Tab.Screen
        name={NavigationConstants.Stacks.InformationStack}
        component={InformationStack}
      />
      <Tab.Screen
        name={NavigationConstants.Stacks.ProfileStack}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
