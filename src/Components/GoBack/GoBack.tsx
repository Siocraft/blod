import { FC } from "react";
import { Pressable, View } from "react-native";
import { useAppNavigation } from "@hooks";
import { BText } from "../BText";
import { ArrowLeftSvg } from "@assets";

export const GoBack: FC = () => {
  const { goBack } = useAppNavigation();

  const onGoBack = () => {
    goBack();
  };
  return (
    <Pressable style={{ flexDirection: 'row' }} onPress={onGoBack}>
      <ArrowLeftSvg />
      <View  style={{ width: 8 }} />
      <BText color="secondary" bold>Regresar</BText>
    </Pressable>
  );
};