import { BText } from "@components";
import { useSignOut } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";

export const GuestSignedIn: FC = () => {

  const {
    signOutFromApp
  } = useSignOut();

  const handleOnLoginPressed = () => {
    signOutFromApp();
  }

  return <View style={styles.loginContainer}>
    <BText color="black" size="large" bold>
      Ingresa a tu cuenta para ver tu información
    </BText>
    <Pressable onPress={handleOnLoginPressed} style={{
      backgroundColor: ColorsEnum.secondary,
      padding: 8,
      borderRadius: 8,
      marginTop: 16,
      width: "100%",
      alignItems: "center"
    }}>
      <BText color="white">
        Ir al inicio de sesión
      </BText>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  }
});