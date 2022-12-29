import { BText } from "@components";
import { useAuth, useSignOut } from "@hooks";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";

export const Menu: FC = () => {

  const { user } = useAuth();

  const { signOutFromApp } = useSignOut();
  return (
    <View style={styles.container}>
      <BText style={styles.text}>Menú</BText>
      {user && <Pressable style={styles.signOutButton} onPress={signOutFromApp}>
        <BText color="white" bold>
          Cerrar sesión
        </BText>
      </Pressable>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
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
});
