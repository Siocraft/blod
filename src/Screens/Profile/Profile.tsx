import { BText, ProfileData, ProfileImage } from "@components";
import { useAppNavigation, useAuth, useUser } from "@hooks";
import { ColorsEnum } from "@theme";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const Profile = () => {

  const auth = getAuth();

  const { user: authUser } = useAuth();
  const { data: user, isLoading: isLoadingUser, isError: isErrorUser } = useUser(authUser?.uid);

  const { navigateToAuth } = useAppNavigation();
  
  const signOutFromApp = () => {
    signOut(auth).then(() => {
      navigateToAuth();
    }).catch((error) => {
      throw new Error(error);
    });
  }

  const handleOnLoginPressed = () => {
    signOutFromApp();
  }

  if(!authUser) {
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
    </View>
  }

  if(!user) return null;
  if(isLoadingUser) return <BText>Loading</BText>;
  if(isErrorUser) return <BText>Error</BText>;

  return <View style={styles.container}>
    <ProfileImage avatar={user.avatar}/>
    <BText size="title" superBold color="secondary">{user.name}, {user.age}</BText>
    <View style={styles.divider} />
    
    
    <ProfileData
      bloodType={user.bloodType}
      location={user.location}
      litersDonated={user.litersDonated}
      contact={user.contact}
    />

    <View style={styles.divider} />
    {user.description && <View>
      <BText size="title" bold color="secondary">About</BText>
      <BText color="black" style={{ marginTop: 8 }}>{user.description}</BText>
    </View>}

    <View style={styles.buttonSection}>
      <Pressable style={styles.contactButton} onPress={() => console.log("Hello")}>
        <BText color="white" bold>I want to donate blood</BText>
      </Pressable>
      <Pressable style={styles.editButton} onPress={() => console.log("Hello")}>
        <BText color="secondary" bold>Edit profile</BText>
      </Pressable>
      <Pressable onPress={signOutFromApp}>
        <BText color="primary" bold style={{ alignSelf: 'center', marginTop: 8 }}>Cerrar sesión</BText>
      </Pressable>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: ColorsEnum.secondary,
    marginVertical: 16,
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
  buttonSection: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  }
})