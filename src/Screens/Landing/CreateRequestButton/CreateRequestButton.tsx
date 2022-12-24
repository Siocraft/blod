import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CreateRequestButton: FC = () => {
  const { navigateToCreateDonationRequest } = useAppNavigation();

  const onCreateRequest = () => {
    navigateToCreateDonationRequest();
  };

  return (
    <Pressable onPress={onCreateRequest} style={styles.button}>
      <Ionicons
        name="add"
        size={32}
        color="white"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorsEnum.secondary,
    height: 50,
    width: 50,
    position: "absolute",
    bottom: 16,
    right: 16,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
