import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { BText } from "../BText";
import { ProfileDataText } from "../ProfileDataText";


export interface ProfileDataProps {
  bloodType: string;
  location: string;
  litersDonated: number;
  contact?: string;
}

export const ProfileData: FC<ProfileDataProps> = ({
  bloodType,
  location,
  litersDonated,
  contact,
}) => {
  return <View style={styles.dataContainer}>
    <BText size="title" bold color="secondary" style={{ marginBottom: 16 }}>Data</BText>
    <View style={{ flexDirection: "row" }}>
      <ProfileDataText left label="Bloodtype: " value={bloodType} />
      <ProfileDataText label="Loc: " value={location} />
    </View>
    <View style={{ flexDirection: "row" }}>
      <ProfileDataText left label="Donated: " value={litersDonated + " liters"} />
      <ProfileDataText label="Contact: " value={contact} />
    </View>
  </View>;
};

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
});