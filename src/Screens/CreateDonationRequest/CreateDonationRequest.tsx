import { BButton, BCard, BDropdown, BText, BTextInput, BirthDateModal, BloodTypeModal, GoBack, HospitalModal } from "@components";
import { LoadingContext } from "@context";
import { useAppNavigation, useAuth, useCreateDonationRequest, useHospitals, useUser } from "@hooks";
import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RequestCard } from "../Home/RequestCard";
import { useFormik } from "formik";
import { Ionicons, MaterialIcons, Fontisto } from '@expo/vector-icons';
import { ColorsEnum } from "@theme";
import * as yup from "yup"

const requestSchema = yup.object().shape({
  firstname: yup.string().required("Este campo es requerido"),
  lastname: yup.string().required("Este campo es requerido"),
  birthDate: yup.string().required("Este campo es requerido"),
  bloodType: yup.string()
  .required('Este campo es requerido')
  .test('valid-rh-factor', 'RH Inválido', (value) => {
    if (!value) return true; // Skip validation if blood type is not selected
    return /^(A|B|AB|O)(\+|-)$/.test(value);
  }),
  city: yup.string().required("Este campo es requerido"),
  hospital: yup.string().required("Este campo es requerido"),
  contact: yup.string().matches(/^\d{10}$/, 'Número de 10 dígitos').required("Este campo es requerido"),
  litersDonated: yup.string().required("Este campo es requerido"),
  avatar: yup.string().required("Este campo es requerido"),
  description: yup.string().required("Este campo es requerido"),
})

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
    mutate: createDonationRequest,
  } = useCreateDonationRequest();

  const { goBack } = useAppNavigation()

  const {
    setValues,
    values,
    setFieldValue,
    handleSubmit,
    resetForm,
    errors,
    touched
  } = useFormik({
    validationSchema: requestSchema,
    validateOnBlur: true,
    initialValues: {
      lastname: "",
      firstname: userData?.name,
      birthDate: undefined,
      bloodType: "A+",
      city: "",
      hospital: "",
      contact: "",
      litersDonated: 0,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      description: ""
    },
    onSubmit: async (submittedValues) => {
      createDonationRequest({
        ...submittedValues,
        age,
        bloodType: submittedValues.bloodType as DonationRequest["bloodType"],
      })

      resetForm()
      goBack()
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
      <GoBack float />
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
            error={!!errors.firstname && !!touched.firstname}
            errorMessage={errors.firstname as string}
            label="Nombre"
            placeholder="Nombre"
            value={values.firstname}
            onChangeText={(text) => setValues({ ...values, firstname: text })}
            icon={() => <Ionicons name="person-circle" size={24} color={!!errors.firstname && !!touched.firstname ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            error={!!errors.lastname && !!touched.lastname}
            errorMessage={errors.lastname}
            label="Apellido"
            placeholder="Apellido"
            value={values.lastname}
            onChangeText={(text) => setValues({ ...values, lastname: text })}
            icon={() => <Ionicons name="person-circle" size={24} color={!!errors.lastname && !!touched.lastname ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            error={!!errors.contact && !!touched.contact}
            errorMessage={errors.contact}
            keyboardType="phone-pad"
            label="Teléfono"
            placeholder="Teléfono"
            value={values.contact}
            onChangeText={(text) => setValues({ ...values, contact: text })}
            icon={() => <Ionicons name="phone-portrait" size={24} color={!!errors.contact && !!touched.contact ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BTextInput
            error={!!errors.description && !!touched.description}
            errorMessage={errors.description}
            label="Descripción"
            multiline
            placeholder="Escribe una descripción aquí para darle a las personas un poco de más información"
            value={values.description}
            onChangeText={(text) => setValues({ ...values, description: text })}
            style={{ height: 100 }}
            icon={() => <MaterialIcons name="description" size={24} color={!!errors.description && !!touched.description ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            error={!!errors.birthDate && !!touched.birthDate}
            errorMessage={errors.birthDate}
            label="Fecha de Nacimiento"
            text={displayBirthDate ?? "Fecha de nacimiento"}
            onPress={onPressShowBirthDateModal}
            iconLeft={() => <Fontisto name="date" size={24} color={!!errors.birthDate && touched.birthDate ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            error={!!errors.bloodType && !!touched.bloodType}
            errorMessage={errors.bloodType}
            label="Tipo de sangre"
            text={values.bloodType}
            onPress={onPressShowBloodTypeModal}
            iconLeft={() => <Fontisto name="blood-drop" size={24} color={!!errors.bloodType && touched.bloodType ? ColorsEnum.error : ColorsEnum.secondary} />}
          />
          <View style={{ height: 8 }} />
          <BDropdown
            error={!!errors.hospital && !!touched.hospital}
            errorMessage={errors.hospital}
            label="Hospital"
            text={values.hospital}
            onPress={onPressShowHospitalModal}
            iconLeft={() => <Fontisto name="blood-drop" size={24} color={!!errors.hospital && touched.hospital ? ColorsEnum.error : ColorsEnum.secondary} />}
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
