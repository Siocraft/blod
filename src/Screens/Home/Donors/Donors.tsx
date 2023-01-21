import { FilterButton, Filters } from "@components";
import { ColorsEnum } from "@theme";
import { FC, useState } from "react";
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

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };

  const [filtersVisibility, setFiltersVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <FilterButton onPress={onToggleFilters} />
      {filtersVisibility ? (
        <Filters
          variant="primary"
        />
      ) : (
        <FlatList
          data={donorCards}
          renderItem={({ item }) => (
            <DonorCard onContact={onContact} donor={item} />
          )}
          keyExtractor={item => "Donor_card_" + item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: ColorsEnum.backgroundPrimary, padding: 16 },
});
