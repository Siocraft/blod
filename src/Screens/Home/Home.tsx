import { ContactModal } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { Donors } from "./Donors";
import { Requests } from "./Requests";
import { Tabs } from "./Tabs";

export const Home: FC = () => {
  const insets = useSafeAreaInsets();

  const [isContactModaVisible, setIsContactModalVisible] = useState(false);

  const [selectedTab, setSelectedTab] = useState<"donors" | "requests">(
    "requests"
  );

  return (
    <SafeAreaView
      style={[styles.homeContainer, { paddingBottom: -insets.bottom }]}
    >
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "requests" && (
        <Requests setIsContactModalVisible={setIsContactModalVisible} />
      )}
      {selectedTab === "donors" && (
        <Donors setIsContactModalVisible={setIsContactModalVisible} />
      )}
      <ContactModal
        onClose={() => {
          setIsContactModalVisible(false);
        }}
        isVisible={isContactModaVisible}
        variant={selectedTab === "donors" ? "primary" : "secondary"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: ColorsEnum.white,
  },
});
