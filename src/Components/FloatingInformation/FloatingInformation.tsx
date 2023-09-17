import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { BText } from "../BText";

interface FloatingInformationProps {
  link: string;
  text: string;
}

const navigateToURL = (URL: string) => Linking.openURL(URL);

export const FloatingInformation: FC<FloatingInformationProps> = ({ link, text }) => {
  return <TouchableOpacity style={styles.floatingContainer} onPress={() => navigateToURL(link)}>
    <BText style={styles.text}>
      {text} <BText style={styles.link}>{link}</BText>
    </BText>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: "absolute",
    bottom: 38,
    right: 0,
    left: 0,
    marginHorizontal: 32,
    backgroundColor: ColorsEnum.backgroundSecondary,
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