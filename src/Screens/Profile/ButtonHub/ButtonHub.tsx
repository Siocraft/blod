import { BText } from "@components"
import { useSignOut } from "@hooks"
import { ColorsEnum } from "@theme"
import React, { FC } from "react"
import { Pressable, View, StyleSheet } from "react-native"

export const ButtonHub: FC = () => {

  const { signOutFromApp } = useSignOut()

  return <View style={styles.buttonHubContainer}>
    <Pressable style={styles.contactButton} onPress={() => console.log("Donate blood")}>
      <BText color="white" bold>Quiero donar sangre</BText>
    </Pressable>
    <Pressable style={styles.editButton} onPress={() => console.log("Edit")}>
      <BText color="secondary" bold>Editar perfil</BText>
    </Pressable>
    <Pressable onPress={signOutFromApp}>
      <BText color="primary" bold style={{ alignSelf: 'center', marginTop: 8 }}>Cerrar sesión</BText>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
  buttonHubContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  },
  contactButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: '100%',
    backgroundColor: ColorsEnum.secondary,
    marginTop: 16,
  },
  editButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: '100%',
    borderColor: ColorsEnum.secondary,
    marginTop: 8,
    borderWidth: 2
  },
})