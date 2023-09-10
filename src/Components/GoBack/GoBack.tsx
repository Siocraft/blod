import { ArrowLeftSvg } from "@assets";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { BText } from "../BText";

type GoBackProps = {
  float?: boolean;
}

export const GoBack: FC<GoBackProps> = () => {
  const { goBack } = useAppNavigation();

  const onGoBack = () => {
    goBack();
  };

  return (  
    <LinearGradient colors={[
      ColorsEnum.white,
      ColorsEnum.white,
      ColorsEnum.white,
      ColorsEnum.white,
      ColorsEnum.whiteTransparent,
    ]} style={styles.gradient}>
      <Pressable style={styles.container} onPress={onGoBack}>
        <ArrowLeftSvg />
        <View style={{ width: 8 }} />
        <BText style={{ lineHeight: 24 }} color="secondary" bold>Regresar</BText>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 16,
  },
  gradient: {
    zIndex: 1,
    height: 40,
    top: 8
  }
});