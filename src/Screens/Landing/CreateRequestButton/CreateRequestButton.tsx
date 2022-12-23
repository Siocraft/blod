import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";

export const CreateRequestButton: FC = () => {

  const { navigateToCreateDonationRequest } = useAppNavigation();

  const onCreateRequest = () => {
    navigateToCreateDonationRequest();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onCreateRequest} style={styles.button}>
        <BText size="large" bold style={styles.text}>Crear una petición</BText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    backgroundColor: ColorsEnum.secondary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
  },
  text: {
    color: "white",
  },
});