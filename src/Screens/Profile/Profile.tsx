import { BText, ProfileData, ProfileImage } from "@components";
import { useAuth, useUser } from "@hooks";
import { ColorsEnum } from "@theme";
import { calculateAgeFromDate } from "@utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorScreen } from "../Error";
import { ButtonHub } from "./ButtonHub";
import { GuestSignedIn } from "./GuestSignedIn";

export const Profile = () => {
  const { user: authUser } = useAuth();
  const { data: user, isError: isErrorUser } = useUser(authUser?.uid);

  if (!authUser) return <GuestSignedIn />;
  if (isErrorUser) return <ErrorScreen />;
  if (!user) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage avatar={user.avatar} editable />
      <BText size="title" superBold color="secondary">
        {user.name}, {calculateAgeFromDate(user.birthDate)}
      </BText>
      <View style={styles.divider} />
      <ProfileData
        bloodType={user.bloodType}
        location={user.location}
        litersDonated={user.litersDonated}
        contact={user.contact}
      />

      <View style={styles.divider} />
      {user.description && (
        <View style={styles.description}>
          <BText size="title" bold color="secondary">
            Acerca de
          </BText>
          <BText color="black" style={{ marginTop: 8 }}>
            {user.description}
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
