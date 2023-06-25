import { FilterButton, Filters } from "@components";
import { ColorsEnum } from "@theme";
import { FC, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { donorCards } from "../../../Data/Donors";
import { DonorCard } from "./DonorCard";
import { LinearGradient } from "expo-linear-gradient";

interface DonorsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Donors: FC<DonorsProps> = ({ setIsContactModalVisible }) => {
  const onContact = () => {
    setIsContactModalVisible(true);
  };

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const [filtersVisibility, setFiltersVisibility] = useState(false);

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
          <Filters variant="primary" />
      ) : ( <FlatList
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
          keyExtractor={item => "Donor_card_" + item.id}
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
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 48,
    top: 8
  }
});
