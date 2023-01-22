import { BRadioButton, BText } from "@components";
import { Data } from "@constants";
import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";

interface ChooseCityProps {
  variant: "primary" | "secondary";
  selectedCity: string;
  setSelectedCity: (value: string) => void;
}

export const ChooseCity: FC<ChooseCityProps> = ({
  variant,
  selectedCity,
  setSelectedCity,
}) => {
  
  return <View>
    <BText size="large" bold color={variant}>Ubicación</BText>

    {
      Data.Cities.map((city) => {
        return <View style={styles.cityContainer}>
          <BRadioButton
            label={city}
            value={city}
            selectedValue={selectedCity}
            onChange={setSelectedCity}
            variant={variant}
          />
        </View>
      })
    }
    
  </View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 16,
    paddingBottom: 0,
  },
  cityContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  }
});