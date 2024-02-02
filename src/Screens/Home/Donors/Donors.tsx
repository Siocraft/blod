import { FilterButton, Filters } from "@components";
import { useAppSelector, useDonors } from "@hooks";
import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { donorCards } from "../../../Data/Donors";
import { DonorCard } from "./DonorCard";

interface DonorsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Donors: FC<DonorsProps> = ({ setIsContactModalVisible }) => {
  const onContact = () => {
    setIsContactModalVisible(true);
  };

  const { donorsFiltersBloodType } = useAppSelector(state => state.donorsFilter);


  const { _data } = useDonors(donorsFiltersBloodType);

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const [ filtersVisibility, setFiltersVisibility ] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient colors={[
        ColorsEnum.backgroundPrimary,
        ColorsEnum.backgroundPrimary,
        ColorsEnum.backgroundPrimary,
        ColorsEnum.backgroundPrimary,
        ColorsEnum.backgroundPrimaryTransparent,
      ]} style={styles.filterContainer}>
        <FilterButton onPress={onToggleFilters} />
      </LinearGradient>
      {
        filtersVisibility ? (
          <Filters
            variant="primary"
            location="donors"
            setFiltersVisibility={setFiltersVisibility}
          />
        ) : (<FlatList
          data={donorCards}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={{ height: 40 }} />}
          contentContainerStyle={{ padding: 16, paddingTop: 0 }}
          renderItem={({ item }) => (
            <DonorCard
              onContact={onContact}
              donor={item}
            />
          )}
          keyExtractor={item => "Donors_Donor_card_" + item.id}
          ListFooterComponent={() => <View style={{ height: 80 }} />}
        />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.backgroundPrimary,
    paddingVertical: 16,
    height: "100%",
  },
  filterContainer: {
    paddingLeft: 16,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 48,
    top: 8
  }
});
