import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

declare interface DonationRequestCardProps {
  requestDonation: DonationRequest;
}

export const DonationRequestCard: FC<DonationRequestCardProps> = ({ requestDonation }) => {
  return <View style={styles.container}>
    <View style={styles.row}>
      <Image source={{
        uri: requestDonation.avatar,
      }} style={styles.headerImage} />
      <View style={styles.headerInfo}>
        <View style={styles.nameContainer}>
          <BText size="title" bold style={{ paddingRight: 8 }}>{requestDonation.name}</BText>
          <BText color="tertiary">{requestDonation.age}</BText>
        </View>
        {requestDonation.hospital && <BText>Hospital: {requestDonation.hospital}</BText>}
        <BText size="small" style={{ marginTop: 4 }}>{requestDonation.location}</BText>
      </View>
      <View style={styles.bloodType}>
        <BText>{requestDonation.bloodType}</BText>
      </View>
    </View>
    <BText size="large" color="tertiary" style={styles.description}>
      {requestDonation.description}
    </BText>
    <View style={styles.buttonGroup}>
      <Pressable style={StyleSheet.flatten([
        styles.button,
        styles.contactButton
      ])} onPress={() => console.log("Hello")}>
        <BText color="primary" bold>Contact</BText>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log("Hello")}>
        <BText color="primary" bold>Check more info</BText>
      </Pressable>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    marginBottom: 0,
    borderRadius: 8,
    backgroundColor: ColorsEnum.secondary,
    borderColor: ColorsEnum.quinary,
    borderWidth: 1,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  row: { flexDirection: "row"},
  description: {
    marginTop: 12,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  button: {
    backgroundColor: ColorsEnum.success,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
  },
  contactButton: {
    marginRight: 16
  },
  bloodType: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerInfo: {
    flex: 4
  }
})