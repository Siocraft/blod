import { FilterButton, Filters } from "@components";
import { ColorsEnum } from "@theme";
import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";

interface RequestsProps {
  setIsContactModalVisible: (value: boolean) => void;
}

export const Requests: FC<RequestsProps> = ({ setIsContactModalVisible }) => {
  
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const onToggleFilters = () => {
    setFiltersVisibility(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <FilterButton variant="secondary" onPress={onToggleFilters} />
      {
        filtersVisibility ? (
          <Filters variant="secondary" />
        ) : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: ColorsEnum.backgroundSecondary, padding: 16 },
});
