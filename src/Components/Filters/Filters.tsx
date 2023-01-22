import { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { BText } from "../BText";
import { ChooseBloodType } from "../ChooseBloodType";
import { ChooseCity } from "../ChooseCity";

interface FiltersProps {
  variant: "primary" | "secondary";
}

export const Filters: FC<FiltersProps> = ({
  variant,
}) => {

  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return <View>
    <View style={styles.triangle} />
    <ScrollView style={styles.container}>
      <ChooseBloodType
        variant={variant}
        selectedBloodType={selectedBloodType}
        setSelectedBloodType={setSelectedBloodType}
      />
      <ChooseCity
        variant={variant}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16
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