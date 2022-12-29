import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useAppNavigation } from "@hooks";
import { BText } from "../BText";
import { ColorsEnum } from "@theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const GoBack: FC = () => {
  const { goBack } = useAppNavigation();
  const { top } = useSafeAreaInsets();

  const onGoBack = () => {
    goBack();
  }
  return (
    <Pressable onPress={onGoBack} style={[
      styles.container,
      { top }
    ]}>
      <MaterialIcons name="chevron-left" size={44} color={ColorsEnum.secondary}/>
      <BText color="secondary">Regresar</BText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
  }
});