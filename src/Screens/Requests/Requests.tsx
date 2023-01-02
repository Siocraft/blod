import { ContactModal } from "@components";
import { ColorsEnum } from "@theme";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";
import { donationRequests } from "../../Data/DonationRequests";
import { CreateRequestButton } from "./CreateRequestButton";
import { DonationRequestCard } from "./DonationRequestCard";

export const Requests = () => {
  const insets = useSafeAreaInsets();

  const [isContactModaVisible, setIsContactModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={[styles.landingContainer, { paddingBottom: -insets.bottom }]}
    >
      <FlatList
        data={donationRequests}
        renderItem={({ item }) => (
          <DonationRequestCard
            requestDonation={item}
            setIsContactModalVisible={setIsContactModalVisible}
          />
        )}
        keyExtractor={item => item.id}
      />
      <CreateRequestButton />
      <ContactModal onClose={() => {
        setIsContactModalVisible(false);
      }} isVisible={isContactModaVisible} variant="primary" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
});
