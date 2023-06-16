import { useAuth, useSignOut } from "@hooks";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { ColorsEnum } from "@theme";
import { BButton } from "../BButton";

export const SignOutButton: FC = ({

}) => {

  const { user } = useAuth();
  const { signOutFromApp } = useSignOut();

  return user ? (
    <BButton
      style={styles.signOutButton}
      title="Cerrar sesión"
      onPress={signOutFromApp}
    />
  ) : null
}

const styles = StyleSheet.create({
  signOutButton: {
    position: "absolute",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: ColorsEnum.primary,
    marginHorizontal: 16,
    bottom: 32,
    left: 0,
    right: 0,
  },
})