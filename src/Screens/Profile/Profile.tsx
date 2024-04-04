import { useFirebaseUser } from "@services";
import { ColorsEnum } from "@theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonHub } from "./ButtonHub";
import { GuestSignedIn } from "./GuestSignedIn";
import { useUser } from "@hooks";
import { BText, ProfileData, ProfileImage } from "@components";
import { calculateAgeFromDate } from "@utils";

export const Profile = () => {
  const firebaseUser = useFirebaseUser();
  const { data: user, isError: isErrorUser } = useUser(firebaseUser?.uid);
  if (!user) return <GuestSignedIn />;
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
