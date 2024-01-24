import { BloodSvg } from "@assets";
import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { BText } from "../BText";

interface BBloodTypeProps {
  bloodType: BloodType;
  variant?: "primary" | "secondary";
  style?: ViewStyle;
}


export const BBloodType: FC<BBloodTypeProps> = ({
  bloodType,
  variant = "primary",
  style
}) => {
  return <View style={[
    styles.bloodType,
    style
  ]}>
    <BloodSvg variant={variant} />
    <BText color={variant} superBold size="title" style={{ position: "absolute" }}>
      {bloodType}
    </BText>
  </View>;
};

const styles = StyleSheet.create({
  bloodType: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});