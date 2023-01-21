import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";

import { BText } from "../BText";
import { ChooseBloodType } from "../ChooseBloodType";

interface FiltersProps {
  variant: "primary" | "secondary";
}

export const Filters: FC<FiltersProps> = ({
  variant,
}) => {

  return <View style={styles.container}>
    <View style={styles.triangle} />
    <ChooseBloodType variant={variant} />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    position: "absolute",
    top: -12,
    left: 32,
  },
});