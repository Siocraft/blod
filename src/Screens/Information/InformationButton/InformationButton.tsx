import { ArrowRightSvg } from "@assets";
import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

declare interface InformationButtonProps {
  onPress: () => void;
  title: string;
}

export const InformationButton: FC<InformationButtonProps> = ({
  onPress,
  title,
}) => {

  return <TouchableOpacity style={styles.container} onPress={onPress}>
    <BText size="large" bold color="black">{title}</BText>
    <View style={{ flex: 1 }} />
    <ArrowRightSvg />
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: ColorsEnum.backgroundSecondary,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  }
});