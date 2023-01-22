import { BloodSvg, HospitalSvg, LocationSvg } from "@assets";
import { BButton, BText } from "@components";
import { ColorsEnum } from "@theme";
import { FC } from "react";
import { StyleSheet, View, Image } from "react-native";

interface RequestCardProps {
  request: DonationRequest;
  onContact: () => void;
}

export const RequestCard: FC<RequestCardProps> = ({
  request,
  onContact,
}) => {
  return <View style={styles.requestCard}>
  <View style={styles.header}>
    <Image source={{ uri: request.avatar }} style={styles.avatar} />
    <View style={styles.headerText}>
      <BText size="title" color="black" bold>
        {request.firstname}
      </BText>
      <View style={styles.locationContainer}>
        <HospitalSvg variant="secondary" />
        <View style={{ width: 4 }} />
        <BText size="large" color="black">
          {request.hospital}
        </BText>
      </View>
      <View style={styles.locationContainer}>
        <LocationSvg variant="secondary" />
        <View style={{ width: 4 }} />
        <BText size="large" color="black">
          {request.city}
        </BText>
      </View>
      <View style={{ flex: 1 }} />
    </View>
    <View style={{ flex: 1 }} />
    <View style={styles.bloodType}>
      <BloodSvg variant="secondary" />
      <BText superBold size="title" color="secondary" style={{ position: "absolute" }}>
        {request.bloodType}
      </BText>
    </View>
  </View>
  <BText color="black" style={styles.description}>
    {request.description}
  </BText>
  <View style={{ height: 16 }} />
  <View style={styles.buttonHub}>
    <View style={styles.button}>
      <BButton title="Ver más" variant="secondary-void" />
    </View>
    <View style={{ width: 16 }} />
    <View style={styles.button}>
      <BButton variant="secondary" title="Donar" onPress={onContact} />
    </View>
  </View>
</View>
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsEnum.backgroundSecondary,
  },
  requestCard: {
    backgroundColor: ColorsEnum.white,
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: ColorsEnum.secondary,
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