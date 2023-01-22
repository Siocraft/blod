import { ArrowRightSvg } from "@assets";
import { BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

declare interface InformationButtonProps {
  onPress: () => void;
  title: string;
}

export const InformationButton: FC<InformationButtonProps> = ({
  onPress,
  title,
}) => {

  return <Pressable style={styles.container} onPress={onPress}>
    <BText size="large" bold color="black">{title}</BText>
    <View style={{ flex: 1 }} />
    <ArrowRightSvg />
  </Pressable>
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: ColorsEnum.backgroundSecondary,
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  }
});