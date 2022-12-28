import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";

export const ButtonHub: FC = () => {
  const { navigateToEditProfile } = useAppNavigation();

  const onPressEditProfile = () => {
    navigateToEditProfile();
  };

  return (
    <View style={styles.buttonHubContainer}>
      <Pressable
        style={styles.contactButton}
        onPress={() => console.log("Donate blood")}
      >
        <BText color="white" bold>
          Quiero donar sangre
        </BText>
      </Pressable>
      <Pressable style={styles.editButton} onPress={onPressEditProfile}>
        <BText color="secondary" bold>
          Editar perfil
        </BText>
      </Pressable>
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
    marginTop: 16,
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
