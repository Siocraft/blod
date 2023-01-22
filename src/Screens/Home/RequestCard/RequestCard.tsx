import { BloodSvg, HospitalSvg, LocationSvg } from "@assets";
import { BButton, BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

declare interface RequestCardProps {
  requestDonation: DonationRequest;
  setIsContactModalVisible: (value: boolean) => void;
}

export const RequestCard: FC<RequestCardProps> = ({
  requestDonation,
  setIsContactModalVisible,
}) => {
  const { navigateToOtherProfile } = useAppNavigation();

  const pushRequestUserProfile = () => {
    navigateToOtherProfile(requestDonation.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable onPress={pushRequestUserProfile}>
          <Image
            source={{
              uri: requestDonation.avatar,
            }}
            style={styles.headerImage}
          />
        </Pressable>
        <View style={styles.headerInfo}>
          <View style={styles.nameContainer}>
            <BText size="title" bold style={{ paddingRight: 8 }} color="black">
              {requestDonation.name.split(" ")[0]}
            </BText>
          </View>
          {requestDonation.hospital && (
            <View>
              <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                  <HospitalSvg variant="secondary" />
                </View>
                <View style={{ width: 4 }} />
                <BText color="black">{requestDonation.hospital}</BText>
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                  <LocationSvg variant="secondary" />
                </View>
                <View style={{ width: 4 }} />
                <BText color="black">{requestDonation.city}</BText>
              </View>
            </View>
          )}
        </View>
        <View style={styles.bloodType}>
          <BloodSvg variant="secondary" />
          <BText
            color="secondary"
            superBold
            size="title"
            style={{ position: "absolute" }}
          >
            {requestDonation.bloodType}
          </BText>
        </View>
      </View>
      <BText color="black" style={styles.description}>
        {requestDonation.description}
      </BText>
      <View style={styles.buttonGroup}>
        <View style={{ flex: 1 }}>
          <BButton
            variant="secondary-void"
            title="Ver más"
            onPress={() => console.log("More Info")}
          />
        </View>
        <View style={{ width: 16 }} />
        <View style={{ flex: 1 }}>
          <BButton
            variant="secondary"
            title="Contactar"
            onPress={() => setIsContactModalVisible(true)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: ColorsEnum.white,
    shadowColor: ColorsEnum.secondary,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
  },
  headerImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: { flexDirection: "row" },
  description: {
    marginTop: 12,
    color: ColorsEnum.darkGray,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  bloodType: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerInfo: {
    flex: 4,
    marginLeft: 8,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
