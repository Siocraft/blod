import { BloodSvg, DonorHeartSvg, LocationSvg } from "@assets";
import { BButton, BCard, BText } from "@components";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

interface DonorCardProps {
  donor: DonorCard;
  onContact: () => void;
}

export const DonorCard: FC<DonorCardProps> = ({ donor, onContact }) => {
  return (
    <BCard variant="primary">
      <View style={styles.header}>
        <Image source={{ uri: donor.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <View style={{ flexDirection: "row" }}>
            <BText size="title" color="black" bold>
              {donor.firstName}
            </BText>
            {donor.isAvailableToDonate && (
              <>
                <View style={{ width: "10%" }} />
                <View style={{ alignSelf: "center" }}>
                  <View style={styles.badge}>
                    <DonorHeartSvg />
                    <View style={{ width: 4 }} />
                    <BText size="small" bold color="secondary">
                      Donador
                    </BText>
                  </View>
                </View>
              </>
            )}
          </View>
          <View style={styles.locationContainer}>
            <LocationSvg />
            <View style={{ width: 4 }} />
            <BText size="large" color="black">
              {donor.city}
            </BText>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.bloodType}>
          <BloodSvg />
          <BText superBold size="title" style={{ position: "absolute" }}>
            {donor.bloodType}
          </BText>
        </View>
      </View>
      <BText color="black" style={styles.description}>
        {donor.description}
      </BText>
      <View style={{ height: 16 }} />
      <View style={styles.buttonHub}>
        <View style={styles.button}>
          <BButton title="Ver más" variant="primary-void" />
        </View>
        <View style={{ width: 16 }} />
        <View style={styles.button}>
          <BButton title="Contactar" onPress={onContact} />
        </View>
      </View>
    </BCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  avatar: { height: 64, width: 64, borderRadius: 8 },
  header: {
    flexDirection: "row",
  },
  headerText: {
    marginLeft: 16,
    alignItems: "flex-start",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonHub: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  bloodType: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginTop: 12,
    color: ColorsEnum.darkGray,
  },
});
