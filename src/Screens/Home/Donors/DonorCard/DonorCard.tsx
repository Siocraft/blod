import { BloodSvg, LocationSvg } from "@assets";
import { BButton, BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

interface DonorCardProps {
  donor: DonorCard;
  onContact: () => void;
}

export const DonorCard: FC<DonorCardProps> = ({ donor, onContact }) => {
  return (
    <View style={styles.donorCard}>
      <View style={styles.header}>
        <Image source={{ uri: donor.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <BText size="title" color="black" bold>
            {donor.name}
          </BText>
          <View style={styles.locationContainer}>
            <LocationSvg />
            <View style={{ width: 4 }} />
            <BText size="large" color="black">
              {donor.city}
            </BText>
          </View>
          {donor.isAvailableToDonate && (
            <>
              <View style={{ height: 8 }} />
              <View style={styles.badge}>
                <BText size="small" color="black">
                  Donador
                </BText>
              </View>
            </>
          )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsEnum.backgroundPrimary,
  },
  donorCard: {
    backgroundColor: ColorsEnum.white,
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: ColorsEnum.primary,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
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
    backgroundColor: ColorsEnum.success,
    paddingHorizontal: 8,
    borderRadius: 8,
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
