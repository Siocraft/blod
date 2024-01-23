import { AntDesign } from "@expo/vector-icons";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CreateRequestButton: FC = () => {
  const { navigateToCreateDonationRequest } = useAppNavigation();
  const { bottom } = useSafeAreaInsets();

  const onCreateRequest = () => {
    navigateToCreateDonationRequest();
  };

  return (
    <TouchableOpacity style={[
      styles.floatingButton,
      {
        bottom: bottom + 54,
      }
    ]} onPress={onCreateRequest}>
      <AntDesign name="plus" size={32} color={ColorsEnum.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorsEnum.secondary,
    height: 50,
    width: 50,
    position: "absolute",
    bottom: 48,
    right: 16,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  floatingButton: {
    position: "absolute",
    right: 16,
    backgroundColor: ColorsEnum.secondary,
    padding: 8,
    borderRadius: 40,
  }
});
