import { BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface TabsProps {
  selectedTab: "donators" | "requests";
  setSelectedTab: (tab: "donators" | "requests") => void;
}

export const Tabs: FC<TabsProps> = ({
  selectedTab,
  setSelectedTab,
}) => {

  const onSelectRequestsTab = () => {
    console.log("onSelectRequestsTab")
    setSelectedTab("requests");
  };

  const onSelectDonatorsTab = () => {
    console.log("onSelectDonatorsTab")
    setSelectedTab("donators");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={onSelectRequestsTab} style={[
          styles.tab,
          selectedTab === "requests" && styles.requestsSelected,
        ]}>
          <BText superBold color="secondary">Solicitudes</BText>
        </Pressable>
        <Pressable onPress={onSelectDonatorsTab} style={[
          styles.tab,
          selectedTab === "donators" && styles.donatorsSelected,
        ]}>
          <BText superBold>Donadores</BText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal: -16,
  },
  tab: {
    padding: 8,
    borderRadius: 30,
    borderBottomEndRadius: 0,
    flex: 1,
    alignItems: "center",
  },
  donatorsSelected: {
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  requestsSelected: {
    backgroundColor: ColorsEnum.backgroundSecondary,
  }
});