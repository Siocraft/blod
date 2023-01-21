import { BRadioButton, BText } from "@components";
import { Data } from "@constants";
import { FC, useState } from "react";
import { View, StyleSheet } from "react-native";

interface ChooseBloodTypeProps {
  variant: "primary" | "secondary";
}

export const ChooseBloodType: FC<ChooseBloodTypeProps> = ({
  variant,
}) => {

  const [selectedBloodType, setSelectedBloodType] = useState("");
  
  return <View>
    <BText size="large" bold color={variant}>Tipo de sangre</BText>

    {
      Data.BloodTypes.map((bloodType, index) => {
        if(index % 2 === 1) return null;
        return <View style={styles.row}>
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
  bloodTypeContainer: {
    width: "40%",
  }
});