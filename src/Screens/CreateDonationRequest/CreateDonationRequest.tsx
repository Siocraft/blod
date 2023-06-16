import { BText } from "@components";
import { LoadingContext } from "@context";
import { useAuth, useUser } from "@hooks";
import React, { FC, useContext, useEffect } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const CreateDonationRequest: FC = () => {
  const { user } = useAuth();
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(user?.uid);
  const { showLoading, hideLoading } = useContext(LoadingContext);
  
  useEffect(() => {
    if(isLoadingUser) {
      showLoading("Cargando información del usuario...")
    } else {
      hideLoading()
    }
  }, [isLoadingUser])

  if (!user) return null;
  if (isLoadingUser) return null;
  if (isErrorUser) return null;
  if (!userData) return null;

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
