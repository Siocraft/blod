import { BButton, BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";

export const ButtonHub: FC = () => {
  const { navigateToEditProfile } = useAppNavigation();

  const onPressEditProfile = () => {
    navigateToEditProfile();
  };

  const navigateToCreateDonationRequest = () => {
    console.log("Create donation request");
  }

  return (
    <View style={styles.buttonHubContainer}>
      <BButton
        variant="secondary"
        title="Quiero donar sangre"
        onPress={() => console.log("Donate blood")}
        />
      <BButton
        style={{ marginTop: 8 }}
        title="Crear una petición de donación"
        variant="secondary-void"
        onPress={navigateToCreateDonationRequest}
      />
      <BButton
        title="Editar perfil"
        variant="transparent"
        onPress={onPressEditProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonHubContainer: {
    position: "absolute",
    width: "100%",
    bottom: 32,
  },
  contactButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    backgroundColor: ColorsEnum.secondary,
    marginTop: 8,
  },
  editButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    borderColor: ColorsEnum.secondary,
    marginTop: 8,
    borderWidth: 2,
  },
});
