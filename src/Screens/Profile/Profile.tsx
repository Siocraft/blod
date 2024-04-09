import { useFirebaseUser } from "@services";
import { ColorsEnum } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonHub } from "./ButtonHub";
import { GuestSignedIn } from "./GuestSignedIn";
import { BText, ProfileData, ProfileImage } from "@components";
import { calculateAgeFromDate } from "@utils";
import { Chase } from "react-native-animated-spinkit";

export const Profile = () => {
  const { userData, isLoading } = useFirebaseUser();

  if (isLoading) return <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Chase size={80} color={ColorsEnum.secondary} />
  </View>;

  if (!userData) return <GuestSignedIn />;

  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage avatar={userData.avatar} editable />
      <BText size="title" superBold color="secondary">
        {userData.name}, {calculateAgeFromDate(userData.birthDate)}
      </BText>
      <View style={styles.divider} />
      <ProfileData
        bloodType={userData.bloodType}
        location={userData.location}
        litersDonated={userData.litersDonated}
        contact={userData.contact}
      />

      <View style={styles.divider} />
      {userData.description && (
        <View style={styles.description}>
          <BText size="title" bold color="secondary">
            Acerca de
          </BText>
          <BText color="black" style={{ marginTop: 8 }}>
            {userData.description}
          </BText>
        </View>
      )}

      <ButtonHub />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: ColorsEnum.secondary,
    marginVertical: 16,
  },
  description: {
    width: "100%",
  },
});
