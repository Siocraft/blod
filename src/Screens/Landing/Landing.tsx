import React from "react";
import { FlatList } from "react-native";
import { donationRequests } from "../../Data/DonationRequests";
import { DonationRequestCard } from "./DonationRequestCard";

export const Landing = () => {
  return (
    <FlatList
      data={donationRequests}
      renderItem={({ item }) => <DonationRequestCard requestDonation={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}