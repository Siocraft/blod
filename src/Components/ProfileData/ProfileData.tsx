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
}) => {
  return (
    <View style={styles.dataContainer}>
      <BText size="title" bold color="secondary" style={{ marginBottom: 16 }}>
        Información
      </BText>
      <View style={{ flexDirection: "row" }}>
        <ProfileDataText left label="Tipo de sangre: " value={bloodType} />
        <ProfileDataText label="Cd: " value={location} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ProfileDataText
          left
          label="Donados: "
          value={(litersDonated ?? 0) + " liters"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
});
