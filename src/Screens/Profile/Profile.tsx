import { BText, ProfileImage } from "@components";
import { ColorsEnum } from "@theme";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { users } from "../../Data/Users";
import { DataText } from "./DataText";

const user = users[0];

export const Profile = () => {
  return <View style={styles.container}>
    <ProfileImage avatar={user.avatar}/>
    <BText size="title" superBold color="secondary">{user.name}, {user.age}</BText>
    <View style={styles.divider} />
    
    
    <View style={styles.dataContainer}>
      <BText size="title" bold color="secondary" style={{ marginBottom: 16 }}>Data</BText>
      <View style={{ flexDirection: "row" }}>
        <DataText left label="Bloodtype: " value={user.bloodType} />
        <DataText label="Loc: " value={user.location} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <DataText left label="Donated: " value={user.litersDonated + " liters"} />
        <DataText label="Contact: " value={user.contact} />
      </View>
    </View>

    <View style={styles.divider} />
    <View>
      <BText size="title" bold color="secondary">About</BText>
      <BText color="black" style={{ marginTop: 8 }}>{user.description}</BText>
    </View>

    <View style={styles.buttonSection}>
      <Pressable style={styles.contactButton} onPress={() => console.log("Hello")}>
        <BText color="white" bold>I want to donate blood</BText>
      </Pressable>
      <Pressable style={styles.editButton} onPress={() => console.log("Hello")}>
        <BText color="secondary" bold>Edit profile</BText>
      </Pressable>
    </View>
  </View>
}

const imageSize = 200;

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
  dataContainer: {
    width: '100%',
    alignItems: 'flex-start',
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
  }
})