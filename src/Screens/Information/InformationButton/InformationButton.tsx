import { BText } from "@components";
import { Feather } from "@expo/vector-icons";
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
    <Feather name="chevron-right" size={24} color={ColorsEnum.secondary} />
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: ColorsEnum.secondary,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  }
});