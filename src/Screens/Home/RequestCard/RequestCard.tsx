import { BloodSvg, HospitalSvg, LocationSvg } from "@assets";
import { BButton, BCard, BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

declare interface RequestCardProps {
  requestDonation: DonationRequest;
  setIsContactModalVisible: (value: boolean) => void;
  disabled?: boolean;
}

export const RequestCard: FC<RequestCardProps> = ({
  requestDonation,
  setIsContactModalVisible,
  disabled = false,
}) => {
  const { navigateToOtherProfile, navigateToRequestDetails } = useAppNavigation();

  const pushRequestUserProfile = () => {
    navigateToOtherProfile(requestDonation.id);
  };

  const navigateToRequestDetailsScreen = () => {
    navigateToRequestDetails(requestDonation.id);
  };

  return (
    <BCard variant="secondary">
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
              {requestDonation.firstName}, {requestDonation.age}
            </BText>
          </View>
          {requestDonation.hospital && (
            <View>
              <View style={styles.infoContainer}>
                <View style={styles.iconContainer}>
                  <HospitalSvg variant="secondary" />
                </View>
                <View style={{ width: 4 }} />
                <BText numberOfLines={1} color="black" style={{ maxWidth: "85%" }}>{requestDonation.hospital}</BText>
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
            disabled={disabled}
            onPress={navigateToRequestDetailsScreen}
          />
        </View>
        <View style={{ width: 16 }} />
        <View style={{ flex: 1 }}>
          <BButton
            variant="secondary"
            title="Contactar"
            disabled={disabled}
            onPress={() => setIsContactModalVisible(true)}
          />
        </View>
      </View>
    </BCard>
  );
};

const styles = StyleSheet.create({
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
