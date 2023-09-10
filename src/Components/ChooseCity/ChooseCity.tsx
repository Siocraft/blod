import { Data } from "@constants";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { BRadioButton } from "../BRadioButton";
import { BText } from "../BText";

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
        return <View style={styles.cityContainer} key={city}>
          <BRadioButton
            label={city}
            value={city}
            selectedValue={selectedCity}
            onChange={setSelectedCity}
            variant={variant}
          />
        </View>;
      })
    }
    
  </View>;
};

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