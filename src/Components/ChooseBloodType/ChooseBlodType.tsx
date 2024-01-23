import { Data } from "@constants";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { BRadioButton } from "../BRadioButton";
import { BText } from "../BText";

interface ChooseBloodTypeProps {
  variant: "primary" | "secondary";
  selectedBloodType: string;
  setSelectedBloodType: (value: string) => void;
}

export const ChooseBloodType: FC<ChooseBloodTypeProps> = ({
  variant,
  selectedBloodType,
  setSelectedBloodType,
}) => {
  
  return <View>
    <BText size="large" bold color={variant}>Tipo de sangre</BText>

    {
      Data.BloodTypes.map((bloodType, index) => {
        if (index % 2 === 1) return null;
        return <View style={styles.row} key={bloodType}>
          <View style={styles.bloodTypeContainer}>
            <BRadioButton
              label={bloodType}
              value={bloodType}
              selectedValue={selectedBloodType}
              onChange={setSelectedBloodType}
              variant={variant}
            />
          </View>
          <View style={{ width: "20%" }} />
          <View style={styles.bloodTypeContainer}>
            <BRadioButton
              label={Data.BloodTypes[index + 1]}
              value={Data.BloodTypes[index + 1]}
              selectedValue={selectedBloodType}
              onChange={setSelectedBloodType}
              variant={variant}
            />
          </View>
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
  bloodTypeContainer: {
    width: "40%",
  }
});