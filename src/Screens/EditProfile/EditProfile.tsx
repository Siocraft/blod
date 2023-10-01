import {
  BDropdown,
  BloodTypeModal,
  BText,
  BTextInput,
  ProfileImage,
} from "@components";
import { Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { useAppNavigation, useAuth, useUpdateUser, useUser } from "@hooks";
import { ColorsEnum } from "@theme";
import { isoDateToDayMonthYear } from "@utils";
import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BirthDateModal } from "../../Components/BirthDateModal";
import { CityModal } from "../../Components/CityModal";
import { ErrorScreen } from "../Error";
import { GuestSignedIn } from "../Profile/GuestSignedIn";

export const EditProfile: FC = () => {
  const { user: authUser } = useAuth();
  const { data: user, isError: isErrorUser, error } = useUser(authUser?.uid);

  const [bloodTypeModalVisible, setBloodTypeModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [birthdayModalVisible, setBirthdayModalVisible] = useState(false);
  const { goBack } = useAppNavigation();

  const updateUserMutation = useUpdateUser(authUser?.uid ?? "");

  const { handleChange, handleBlur, values, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        name: user?.name,
        bloodType: user?.bloodType,
        city: user?.location,
        description: user?.description,
        birthDate: user?.birthDate,
      },
      onSubmit: submittedValues => {
        updateUserMutation({
          id: authUser?.uid ?? "",
          data: submittedValues,
        });
        goBack();
      },
    });

  if (values.bloodType === undefined && user?.bloodType)
    setFieldValue("bloodType", user.bloodType);

  if (values.city === undefined && user?.location)
    setFieldValue("city", user.location);

  if (values.description === undefined && user?.description)
    setFieldValue("description", user.description);

  if (values.birthDate === undefined && user?.birthDate)
    setFieldValue("birthDate", user.birthDate);

  if (values.name === undefined && user?.name) setFieldValue("name", user.name);

  if (!authUser) return <GuestSignedIn />;
  if (!user || isErrorUser) return <ErrorScreen errorMessage={error as string} />;

  const onPressSave = () => {
    handleSubmit();
  };

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

  const onPressShowBirthDateModal = () => {
    setBirthdayModalVisible(true);
  };

  const onPressHideBirthDateModal = () => {
    setBirthdayModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage avatar={user.avatar} editable />
      <BText size="large" color="black" bold>
        Editar perfil
      </BText>
      <View style={{ height: 16 }} />
      <BTextInput
        value={values.name}
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        placeholder="Nombre"
        icon={() => <MaterialIcons name="person" size={18} color="black" />}
      />
      <View style={{ height: 8 }} />
      <BTextInput
        value={authUser.email ?? ""}
        disabled
        icon={() => <Entypo name="email" size={18} color="gray" />}
      />

      <View style={{ height: 8 }} />

      <BDropdown
        text={isoDateToDayMonthYear(values.birthDate) ?? "Fecha de nacimiento"}
        onPress={onPressShowBirthDateModal}
        iconLeft={() => <MaterialIcons name="cake" size={18} color="black" />}
      />
      <View style={{ height: 8 }} />
      <BDropdown
        text={values.bloodType ?? "Tipo de sangre"}
        onPress={onPressShowBloodTypeModal}
        iconLeft={() => (
          <Fontisto name="blood-drop" size={18} color={ColorsEnum.black} />
        )}
      />
      <View style={{ height: 8 }} />
      <BDropdown
        text={values.city ?? "Ciudad"}
        onPress={onPressShowCityModal}
        iconLeft={() => (
          <MaterialIcons
            name="location-city"
            size={18}
            color={ColorsEnum.black}
          />
        )}
      />
      <View style={{ height: 8 }} />
      <BTextInput
        value={values.description}
        onChangeText={handleChange("description")}
        placeholder="Introduce una descripción"
        multiline
        textAlignVertical="top"
        numberOfLines={15}
        style={{ height: 100 }}
        onBlur={handleBlur("description")}
        maxLength={800}
        icon={() => (
          <MaterialIcons
            name="description"
            size={18}
            color={ColorsEnum.black}
          />
        )}
      />

      <BloodTypeModal
        isVisible={bloodTypeModalVisible}
        onPressHideBloodTypeModal={onPressHideBloodTypeModal}
        bloodTypeValue={values.bloodType}
        setFieldValue={setFieldValue}
      />
      <CityModal
        isVisible={cityModalVisible}
        cityValue={values.city}
        setFieldValue={setFieldValue}
        onPressHideCityModal={onPressHideCityModal}
      />
      <BirthDateModal
        isVisible={birthdayModalVisible}
        birthDateValue={values.birthDate}
        setFieldValue={setFieldValue}
        onPressHideBirthDateModal={onPressHideBirthDateModal}
      />

      <Pressable onPress={onPressSave} style={styles.save}>
        <BText color="white">Guardar cambios</BText>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  save: {
    position: "absolute",
    bottom: 32,
    right: 16,
    backgroundColor: ColorsEnum.secondary,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
});
