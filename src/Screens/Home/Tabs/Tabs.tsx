import { BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface TabsProps {
  selectedTab: "donors" | "requests";
  setSelectedTab: (tab: "donors" | "requests") => void;
}

export const Tabs: FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  const onSelectRequestsTab = () => {
    setSelectedTab("requests");
  };

  const onSelectDonatorsTab = () => {
    setSelectedTab("donors");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={onSelectRequestsTab}
          style={[
            styles.tab,
            selectedTab === "requests" && styles.requestsSelected,
          ]}
        >
          <BText bold color="secondary">
            Solicitudes
          </BText>
        </Pressable>
        <Pressable
          onPress={onSelectDonatorsTab}
          style={[
            styles.tab,
            selectedTab === "donors" && styles.donatorsSelected,
          ]}
        >
          <BText bold>Donadores</BText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  tab: {
    padding: 8,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  donatorsSelected: {
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  requestsSelected: {
    backgroundColor: ColorsEnum.backgroundSecondary,
  },
});
