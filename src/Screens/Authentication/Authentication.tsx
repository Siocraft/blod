import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const Authentication: FC = () => {

  const { navigateToApp, navigateToLogin, navigateToSignup } = useAppNavigation();

  const onSignInPressed = () => {
    navigateToLogin();
  };

  const onSignUpPressed = () => {
    navigateToSignup();
  };

  const onGuestPressed = () => {
    navigateToApp();
  };

  return <View style={styles.loginContainer}>
    <BText color="secondary" bold size="large">
      Una aplicación para donar sangre en México.
    </BText>
    <Pressable onPress={navigateToApp}>
      <BText color="black" size="large" style={{ marginTop: 8 }}>
        Puedes donar sangre o pedir que te donen.
      </BText>
    </Pressable>
    <View style={styles.buttonGroup}>
      <Pressable style={styles.signInButton} onPress={onSignInPressed}>
        <BText color="white" bold>Ingresar a tu cuenta</BText>
      </Pressable>
      <Pressable style={styles.signUpButton} onPress={onSignUpPressed}>
        <BText color="secondary" bold>Registrarse</BText>
      </Pressable>
      <Pressable onPress={onGuestPressed}>
        <BText color="secondary" size="large" style={{ alignSelf: "center" }}>Continuar como invitado</BText>
      </Pressable>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorsEnum.backgroundSecondary
  },
  buttonGroup: {
    justifyContent: "space-around",
    padding: 16,
    position: "absolute",
    bottom: 16,
    width: "100%",
  },
  signInButton: {
    width: "100%",
    marginRight: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
    backgroundColor: ColorsEnum.secondary,
    marginBottom: 8,
  },
  signUpButton: {
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
    borderColor: ColorsEnum.secondary,
    borderWidth: 2,
    marginBottom: 8,
  },
})