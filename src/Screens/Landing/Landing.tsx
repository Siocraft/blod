import { ColorsEnum } from "@theme";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { donationRequests } from "../../Data/DonationRequests";
import { DonationRequestCard } from "./DonationRequestCard";

export const Landing = () => {
  return (
    <View style={styles.landingContainer}>
      <FlatList
        data={donationRequests}
        renderItem={({ item }) => <DonationRequestCard requestDonation={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    backgroundColor: ColorsEnum.backgroundPrimary
  }
})