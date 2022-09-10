import React from "react";
import { FlatList } from "react-native";
import { donationRequests } from "../../Data/DonationRequests";
import { RequestDonationCard } from "./RequestDonationCard";

export const Landing = () => {
  return (
    <FlatList
      data={donationRequests}
      renderItem={({ item }) => <RequestDonationCard requestDonation={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}