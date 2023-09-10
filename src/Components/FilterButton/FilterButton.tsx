import { FilterSvg } from "@assets";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { BText } from "../BText";

interface FilterButtonProps {
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export const FilterButton: FC<FilterButtonProps> = ({
  onPress,
  variant = "primary",
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FilterSvg variant={variant} />
      <View style={{ width: 8 }} />
      <BText superBold color={variant}>
        Filtrar
      </BText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsEnum.white,
    alignSelf: "flex-start",
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 24,
    marginBottom: 16,
    flexDirection: "row",
  },
});
