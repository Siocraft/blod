import { BDropdown, BText, BTextInput, ProfileImage } from "@components";
import { useAuth, useUser } from "@hooks";
import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { View, StyleSheet, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorScreen } from "../Error";
import { Loading } from "../Loading";
import { GuestSignedIn } from "../Profile/GuestSignedIn";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import { BloodTypeModal } from "./BloodTypeModal";
import { CityModal } from "./CityModal";

export const EditProfile: FC = () => {
  const { user: authUser } = useAuth();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(authUser?.uid);

  const [bloodTypeModalVisible, setBloodTypeModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);

  const {
    handleChange,
    handleBlur,
    values,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      bloodType: user?.bloodType,
      city: user?.location,
      description: user?.description,
    },
    onSubmit: submittedValues => {
      console.log(submittedValues);
    },
  });

  if (values.bloodType === undefined && user?.bloodType)
    setFieldValue("bloodType", user.bloodType);

  if (values.city === undefined && user?.location)
    setFieldValue("city", user.location);

  if (values.description === undefined && user?.description)
    setFieldValue("description", user.description);

  if (!authUser) return <GuestSignedIn />;
  if (isLoadingUser) return <Loading />;
  if (!user || isErrorUser) return <ErrorScreen />;

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

  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage avatar={user.avatar} />
      <BText size="large" color="black" bold>
        Editar perfil
      </BText>
      <View style={{ height: 16 }} />
      <BTextInput value={authUser.email ?? ""} disabled />
      <View style={{ height: 8 }} />
      <BDropdown
        text={values.bloodType ?? "Tipo de sangre"}
        onPress={onPressShowBloodTypeModal}
        iconLeft={() => (
          <Fontisto style={{ marginRight: 8 }} name="blood-drop" size={18} color={ColorsEnum.black} />
        )}
      />
      <View style={{ height: 8 }} />
      <BDropdown
        text={values.city ?? "Ciudad"}
        onPress={onPressShowCityModal}
        iconLeft={() => (
          <MaterialIcons name="location-city" size={18} color={ColorsEnum.black} />
        )}
      />
      <View style={{ height: 8 }} />
      <BTextInput
        value={values.description}
        onChangeText={handleChange("description")}
        placeholder="Descripción"
        multiline
        numberOfLines={4}
        style={{ height: 100 }}
        onBlur={handleBlur("description")}
        maxLength={100}
        icon={() => (
          <MaterialIcons style={{ marginRight: 8 }} name="description" size={18} color={ColorsEnum.black} />
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
  }
});
