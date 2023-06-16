import { BText } from "@components";
import { LoadingContext } from "@context";
import { useAuth, useUser } from "@hooks";
import React, { FC, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RequestCard } from "../Home/RequestCard";

export const CreateDonationRequest: FC = () => {
  const { user } = useAuth();
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(user?.uid);
  const { showLoading, hideLoading } = useContext(LoadingContext);
  
  console.log(userData)

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
      <BText size="title" bold color="secondary" style={{ alignSelf: "center" }}>
        Crear una solicitud
      </BText>
      <View style={styles.container}>

        <BText style={{ alignSelf: 'center', marginBottom: 16 }} color="black">
          Así verían otros esta solicitud para <BText bold color="secondary">{userData.name}</BText>
        </BText>
        <RequestCard
          setIsContactModalVisible={() => null}
          requestDonation={{
            id: "1",
            name: "Juan Perez",
            avatar: "https://i.pravatar.cc/300",
            bloodType: "A+",
            hospital: "Hospital General",
            city: "Ciudad de México",
            description: "Necesito sangre para mi operación",
            firstname: "Juan",
            contact: "5512345678",
            age: 25,
            litersDonated: 2,
          }}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  cardContainer: {
    flexDirection: "row",
  }
});
