import { BButton, BText } from "@components";
import { useAppNavigation } from "@hooks";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const Authentication: FC = () => {
  const { navigateToApp, navigateToLogin, navigateToSignup } =
    useAppNavigation();

  const onSignInPressed = () => {
    navigateToLogin();
  };

  const onSignUpPressed = () => {
    navigateToSignup();
  };

  const onGuestPressed = () => {
    navigateToApp();
  };

  return (
    <View style={styles.authenticationContainer}>
      <BText color="secondary" bold size="large">
        Una aplicación para donar sangre en México.
      </BText>
      <BText color="black" size="large" style={{ marginTop: 8 }}>
        Puedes donar o encontrar donadores
      </BText>
      <View style={styles.buttonGroup}>
        <BButton
          onPress={onSignInPressed}
          title="Ingresar a tu cuenta"
          variant="secondary"
        />
        <View style={{ height: 16 }} />
        <BButton
          onPress={onSignUpPressed}
          title="¡Registrarse!"
          variant="secondary-void"
        />
        <View style={{ height: 16 }} />
        <BButton
          title="Continuar como invitado"
          onPress={onGuestPressed}
          variant="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authenticationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGroup: {
    justifyContent: "space-around",
    padding: 16,
    position: "absolute",
    bottom: 16,
    width: "100%",
  },
});
