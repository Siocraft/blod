import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { users } from "../../Data/Users";
import { DataText } from "./DataText";

const user = users[0];

export const Profile = () => {
  return <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{
          uri: user.avatar,
      }} style={styles.profileImage} />
    </View>
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
  </View>
}

const imageSize = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  imageContainer: {
    width: imageSize + 8,
    height: imageSize + 8,
    borderRadius: (imageSize + 8) / 2,
    backgroundColor: ColorsEnum.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
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
  }
})