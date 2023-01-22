import { FilterButton, Filters } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { donationRequests } from "../../../Data/DonationRequests";
import { RequestCard } from "../RequestCard";

interface RequestsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Requests: FC<RequestsProps> = ({ setIsContactModalVisible }) => {
  
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const onContact = () => {
    setIsContactModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FilterButton variant="secondary" onPress={onToggleFilters} />
      </View>
      {
        filtersVisibility ? (
          <View style={styles.filterContainer}>
            <Filters variant="secondary" />
          </View>
        ) : <FlatList
          data={donationRequests}
          contentContainerStyle={{ padding: 16, paddingTop: 0 }}
          renderItem={({ item }) => (
            <RequestCard
              requestDonation={item}
              setIsContactModalVisible={onContact}
            />
          )}
          keyExtractor={item => "Donor_card_" + item.id}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.backgroundSecondary,
    paddingTop: 16,
    height: "100%",
  },
  filterContainer: {
    marginLeft: 16,
  }
});
