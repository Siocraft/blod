import { BButton, BText } from "@components";
import { useSignOut } from "@hooks";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const GuestSignedIn: FC = () => {
  const { signOutFromApp } = useSignOut();

  const handleOnLoginPressed = () => {
    signOutFromApp();
  };

  return (
    <View style={styles.loginContainer}>
      <BText color="black" size="large" bold>
        Ingresa a tu cuenta para ver tu información
      </BText>
      <BButton
        onPress={handleOnLoginPressed}
        variant="secondary"
        title="Ir al inicio de sesión"
        style={styles.loginButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  loginButton: {
    marginTop: 16,
    width: "100%",
  }
});
