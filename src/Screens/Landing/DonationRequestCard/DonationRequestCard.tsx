import { BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

declare interface DonationRequestCardProps {
  requestDonation: DonationRequest;
}

export const DonationRequestCard: FC<DonationRequestCardProps> = ({ requestDonation }) => {
  return <View style={styles.container}>
    <View style={styles.row}>
      <Image source={{
        uri: requestDonation.avatar,
      }} style={styles.image} />
      <View>
        <View style={styles.nameContainer}>
          <BText size="title" bold style={{ paddingRight: 8 }}>{requestDonation.name}</BText>
          <BText color="tertiary">{requestDonation.age}</BText>
        </View>
        {requestDonation.hospital && <BText>Hospital: {requestDonation.hospital}</BText>}
        <BText size="small" style={{ marginTop: 4 }}>{requestDonation.location}</BText>
      </View>
    </View>
    <BText size="large" color="tertiary" style={styles.description}>{requestDonation.description}</BText>
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
  image: {
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
  }
})