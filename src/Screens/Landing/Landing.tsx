import { ColorsEnum } from "@theme";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { donationRequests } from "../../Data/DonationRequests";
import { CreateRequestButton } from "./CreateRequestButton";
import { DonationRequestCard } from "./DonationRequestCard";

export const Landing = () => {

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[
      styles.landingContainer,
      { paddingBottom: -insets.bottom }
    ]}>
      <FlatList
        data={donationRequests}
        renderItem={({ item }) => <DonationRequestCard requestDonation={item} />}
        keyExtractor={(item) => item.id}
      />
      <CreateRequestButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    backgroundColor: ColorsEnum.backgroundPrimary,
  }
})