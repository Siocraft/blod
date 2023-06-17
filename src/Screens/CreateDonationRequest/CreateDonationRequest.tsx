import { BButton, BCard, BDropdown, BText, BTextInput, BirthDateModal, BloodTypeModal, HospitalModal } from "@components";
import { LoadingContext } from "@context";
import { useAuth, useHospitals, useUser } from "@hooks";
import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RequestCard } from "../Home/RequestCard";
import { useFormik } from "formik";
import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { ColorsEnum } from "@theme";
import { appAxios } from "@services";

export const CreateDonationRequest: FC = () => {
  const { user } = useAuth();
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(user?.uid);
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [bloodTypeModalVisible, setBloodTypeModalVisible] = useState(false);
  const [hospitalModalVisible, setHospitalModalVisible] = useState(false);
  const [birthdateModalVisible, setBirthDateModalVisible] = useState(false);

  const { data: hospitals } = useHospitals();

  const onPressShowBloodTypeModal = () => {
    setBloodTypeModalVisible(true);
  };

  const onPressHideBloodTypeModal = () => {
    setBloodTypeModalVisible(false);
  };

  const onPressShowHospitalModal = () => {
    setHospitalModalVisible(true);
  }

  const onPressHideHospitalModal = () => {
    setHospitalModalVisible(false);
  }

  const onPressShowBirthDateModal = () => {
    setBirthDateModalVisible(true);
  }

  const onPressHideBirthDateModal = () => {
    setBirthDateModalVisible(false);
  }

  useEffect(() => {
    if(isLoadingUser) {
      showLoading("Cargando información del usuario...")
    } else {
      hideLoading()
    }
  }, [isLoadingUser])

  const {
    setValues,
    values,
    setFieldValue,
    handleSubmit
  } = useFormik({
    initialValues: {
      lastname: undefined,
      firstname: userData?.name,
      birthDate: undefined,
      bloodType: "A+",
      city: undefined,
      hospital: undefined,
      contact: undefined,
      litersDonated: 2,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      description: undefined
    },
    onSubmit: async (submittedValues) => {
      const response = await appAxios.post("/DonationRequest", {
        ...submittedValues,
        id: undefined
      })

      console.log(response)
    }
  })

  const getCityFromHospitalName = useCallback((hospitalName: string) => {
    const city = hospitals?.find(hospital => hospital.name === hospitalName)?.city ?? ''
    setFieldValue("city", city)
  }, [hospitals])

  const displayBirthDate = useMemo(() => {
    if(values.birthDate !== undefined) {
      const date = new Date(values.birthDate)
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    }
    return undefined
  }, [values.birthDate])

  const age = useMemo(() => {
    if(values.birthDate !== undefined) {
      const date = new Date(values.birthDate)
      const today = new Date()
      const age = today.getFullYear() - date.getFullYear()
      const month = today.getMonth() - date.getMonth()
      if(month < 0 || (month === 0 && today.getDate() < date.getDate())) {
        return age - 1
      }
      return age
    }
    return 0
  }, [values.birthDate])

  if (!user) return null;
  if (isLoadingUser) return null;
  if (isErrorUser) return null;
  if (!userData) return null;

  return (
    <SafeAreaView>
      <BText size="title" bold color="secondary" style={{ alignSelf: "center" }}>
        Crear una solicitud
      </BText>
      <ScrollView style={styles.container}>

        <BText style={{ alignSelf: 'center', marginBottom: 16 }} color="black">
          Así verían otros esta nueva <BText bold color="secondary">solicitud</BText>
        </BText>
        <RequestCard
          disabled
          setIsContactModalVisible={() => null}
          requestDonation={{
            id: "New Donation Request",
            name: values.firstname ?? "Nombre",
            avatar: values.avatar,
            bloodType: values.bloodType as DonationRequest["bloodType"],
            hospital: values.hospital ?? "Hospital",
            city: values.city ?? "Ciudad",
            description: values.description ?? "La descripción siempre tiene información útil para quien vea tu petición",
            firstname: values.firstname,
            contact: values.contact ?? "",
            age,
            litersDonated: 2,
          }}
        />

        <BloodTypeModal
          isVisible={bloodTypeModalVisible}
          onPressHideBloodTypeModal={onPressHideBloodTypeModal}
          bloodTypeValue={values.bloodType ?? "Tipo de sangre"}
          setFieldValue={setFieldValue}
        />

        <HospitalModal
          isVisible={hospitalModalVisible}
          onPressHideHospitalModal={onPressHideHospitalModal}
          hospitalValue={values.hospital ?? "Hospital"}
          setFieldValue={setFieldValue}
          cb={getCityFromHospitalName}
        />

        <BirthDateModal
          isVisible={birthdateModalVisible}
          setFieldValue={setFieldValue}
          birthDateValue={values.birthDate}
          onPressHideBirthDateModal={onPressHideBirthDateModal}
        />

        <BCard>
          <BTextInput
            label="Nombre"
            placeholder="Nombre"
            value={values.firstname}
            onChangeText={(text) => setValues({ ...values, firstname: text })}
            icon={() => <Ionicons name="person-circle" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            label="Apellido"
            placeholder="Apellido"
            value={values.lastname}
            onChangeText={(text) => setValues({ ...values, lastname: text })}
            icon={() => <Ionicons name="person-circle" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            label="Teléfono"
            placeholder="Teléfono"
            value={values.contact}
            onChangeText={(text) => setValues({ ...values, contact: text })}
            icon={() => <Ionicons name="phone-portrait" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            label="Descripción"
            multiline
            placeholder="Escribe una descripción aquí para darle a las personas un poco de más información"
            value={values.description}
            onChangeText={(text) => setValues({ ...values, description: text })}
            style={{ height: 100 }}
            icon={() => <MaterialIcons name="description" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            label="Fecha de Nacimiento"
            text={displayBirthDate ?? "Fecha de nacimiento"}
            onPress={onPressShowBirthDateModal}
            iconLeft={() => <Fontisto name="date" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            label="Tipo de sangre"
            text={values.bloodType}
            onPress={onPressShowBloodTypeModal}
            iconLeft={() => <Fontisto name="blood-drop" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            label="Hospital"
            text={values.hospital}
            onPress={onPressShowHospitalModal}
            iconLeft={() => <Fontisto name="blood-drop" size={24} color={ColorsEnum.secondary} />}
          />
          <View style={{ height: 16 }} />
          <BButton
            title="Crear solicitud"
            variant="secondary"
            onPress={() => handleSubmit()}
          />
        </BCard>

      </ScrollView>
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
