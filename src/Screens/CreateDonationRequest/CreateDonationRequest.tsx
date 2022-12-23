import { BText } from "@components";
import { useAuth, useUser } from "@hooks";
import React, { FC } from "react";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const CreateDonationRequest: FC = () => {
  const { user } = useAuth();
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(user?.uid);

  if (!user) return null;
  if (isLoadingUser) return null;
  if (isErrorUser) return null;
  if (!userData) return null;

  console.log(userData);

  return (
    <SafeAreaView>
      <BText size="title" bold color="black" style={{ alignSelf: "center" }}>
        Crear una petición
      </BText>
      <Image
        source={{ uri: userData.avatar }}
        style={{ width: 20, height: 20 }}
      />
      <BText size="large" bold>
        {userData.name}
      </BText>
    </SafeAreaView>
  );
};
