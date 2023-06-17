import { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useAppNavigation } from "@hooks";
import { BText } from "../BText";
import { ArrowLeftSvg } from "@assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type GoBackProps = {
  float?: boolean;
}

export const GoBack: FC<GoBackProps> = ({
  float = false
}) => {
  const { goBack } = useAppNavigation();
  const { top } = useSafeAreaInsets();

  const onGoBack = () => {
    goBack();
  };

  return (
    <Pressable style={StyleSheet.flatten([
      { flexDirection: 'row' },
      float && {
        ...styles.float,
        top: top,
        left: 16,
      }
    ])} onPress={onGoBack}>
      <ArrowLeftSvg />
      <View style={{ width: 8 }} />
      <BText style={{ lineHeight: 24 }} color="secondary" bold>Regresar</BText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
})