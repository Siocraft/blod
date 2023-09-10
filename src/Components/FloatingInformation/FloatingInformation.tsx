import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { BText } from "../BText";

interface FloatingInformationProps {
  link: string;
}

export const FloatingInformation: FC<FloatingInformationProps> = ({ link }) => {
  return <View style={styles.floatingContainer}>
    <BText style={styles.text}>
      Consulta más en <BText style={styles.link}>{link}</BText>
    </BText>
  </View>;
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: "absolute",
    bottom: 38,
    marginHorizontal: 32,
    backgroundColor: ColorsEnum.backgroundSecondary,
    flex: 1,
    borderRadius: 8,
    padding: 16
  },
  text: {
    color: ColorsEnum.black,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
  },
  link: {
    color: ColorsEnum.darkGray,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
  },
});