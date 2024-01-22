import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { BText } from "./BText";

interface BRadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "primary" | "secondary";
}

export const BRadioButton: FC<BRadioButtonProps> = ({
  label,
  value,
  selectedValue,
  onChange,
  variant
}) => {

  const isSelected = value === selectedValue;
  const onPress = () => {
    onChange(isSelected ? "" : value);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={[
          styles.radio,
          {
            borderColor: ColorsEnum[variant ?? "primary"],
          }
        ]}>
          {isSelected ? <View style={[
            styles.radioInner,
            {
              backgroundColor: ColorsEnum[variant ?? "primary"],
            }
          ]} /> : null}
        </View>
        <BText color="black" bold>{label}</BText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});