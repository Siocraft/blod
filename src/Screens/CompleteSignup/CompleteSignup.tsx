import {
  BButton,
  BDropdown,
  BloodTypeModal,
  BTextInput,
  CityModal,
} from "@components";
import { firebaseAuth } from "@config";
import { ErrorsEnum } from "@constants";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createUser, ErrorReporting } from "@services";
import { ColorsEnum } from "@theme";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

export type CompleteSignupProps = NativeStackScreenProps<
  RootStackParamList,
  "CompleteSignup"
>;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, ErrorsEnum.Formik.CompleteSignup.tooShort)
    .max(50, ErrorsEnum.Formik.CompleteSignup.tooLong)
    .required(ErrorsEnum.Formik.Required),
  bloodType: Yup.string().required(ErrorsEnum.Formik.Required),
  city: Yup.string().required(ErrorsEnum.Formik.Required),
});

export const CompleteSignup: FC<CompleteSignupProps> = ({ route }) => {
  const { signupValues } = route.params;

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: undefined,
      bloodType: undefined,
      city: undefined,
      // birthDate: undefined,
    },
    validationSchema: SignupSchema,
    onSubmit: submittedValues => {
      console.log(submittedValues);
      createUserWithEmailAndPassword(
        firebaseAuth,
        signupValues.email,
        signupValues.password
      )
        .then(userCredential => {
          createUser({
            id: userCredential.user.uid,
            name: submittedValues.name ?? "",
            bloodType: submittedValues.bloodType ?? "",
            location: submittedValues.city ?? "",
            // birthDate: submittedValues.birthDate ?? "",
          });
        })
        .catch(error => {
          if (error.code === ErrorsEnum.Firebase.Auth.EmailAlreadyInUse) {
            console.log("That email address is already in use!");
          }
          if (error.code === ErrorsEnum.Firebase.Auth.EmailAlreadyInUse) {
            console.log("That email address is invalid!");
          }

          ErrorReporting(error);
        });
    },
  });

  const [bloodTypeModalVisible, setBloodTypeModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  // const [birthdayModalVisible, setBirthdayModalVisible] = useState(false);

  const onPressShowBloodTypeModal = () => {
    setBloodTypeModalVisible(true);
  };

  const onPressHideBloodTypeModal = () => {
    setBloodTypeModalVisible(false);
  };

  const onPressShowCityModal = () => {
    setCityModalVisible(true);
  };

  const onPressHideCityModal = () => {
    setCityModalVisible(false);
  };

  // const onPressShowBirthDateModal = () => {
  //   setBirthdayModalVisible(true);
  // };

  // const onPressHideBirthDateModal = () => {
  //   setBirthdayModalVisible(false);
  // };

  const nameError = !!errors.name && !!touched.name && !!values.name;

  const onPressSubmit = () => handleSubmit();

  return (
    <SafeAreaView style={styles.container}>
      <BTextInput
        autoCorrect={false}
        spellCheck={false}
        placeholder="Nombre"
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        value={values.name}
        error={nameError}
        errorMessage={errors.name}
        icon={() => (
          <MaterialIcons name="person" size={24} color={ColorsEnum.secondary} />
        )}
      />
      <View style={{ height: 16 }} />
      {/* <BDropdown
        text="Fecha de nacimiento"
        onPress={onPressShowBirthDateModal}
        iconLeft={() => <MaterialIcons name="cake" size={18} color={ColorsEnum.secondary} />}
      />
      <View style={{ height: 16 }} /> */}
      <BDropdown
        text={values.bloodType ?? "Tipo de sangre"}
        onPress={onPressShowBloodTypeModal}
        iconLeft={() => (
          <Fontisto name="blood-drop" size={18} color={ColorsEnum.secondary} />
        )}
      />
      <View style={{ height: 16 }} />
      <BDropdown
        text={values.city ?? "Ciudad"}
        onPress={onPressShowCityModal}
        iconLeft={() => (
          <MaterialIcons
            name="location-city"
            size={18}
            color={ColorsEnum.secondary}
          />
        )}
      />
      <View style={styles.submitContainer}>
        <BButton
          variant="secondary"
          title="Finalizar"
          onPress={onPressSubmit}
        />
      </View>
      <BloodTypeModal
        isVisible={bloodTypeModalVisible}
        onPressHideBloodTypeModal={onPressHideBloodTypeModal}
        bloodTypeValue={values.bloodType ?? "Tipo de sangre"}
        setFieldValue={setFieldValue}
      />
      <CityModal
        isVisible={cityModalVisible}
        cityValue={values.city ?? "Ciudad"}
        setFieldValue={setFieldValue}
        onPressHideCityModal={onPressHideCityModal}
      />
      {/* <BirthDateModal
        isVisible={birthdayModalVisible}
        birthDateValue={values.birthDate ?? "Fecha de nacimiento"}
        setFieldValue={setFieldValue}
        onPressHideBirthDateModal={onPressHideBirthDateModal}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsEnum.white,
    padding: 16,
  },
  submitContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
});
