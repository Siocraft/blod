import { BDropdown, BText, BTextInput, ProfileImage } from "@components";
import { useAuth, useUser } from "@hooks";
import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorScreen } from "../Error";
import { Loading } from "../Loading";
import { GuestSignedIn } from "../Profile/GuestSignedIn";
import { Fontisto } from "@expo/vector-icons";
import { ColorsEnum } from "@theme";
import { BloodTypeModal } from "./BloodTypeModal";

export const EditProfile: FC = () => {
  const { user: authUser } = useAuth();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(authUser?.uid);

  const [bloodTypeModalVisible, setBloodTypeModalVisible] = useState(false);

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
    },
    onSubmit: submittedValues => {
      console.log(submittedValues);
    },
  });

  if (values.bloodType === undefined && user?.bloodType)
    setFieldValue("bloodType", user.bloodType);

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

  const onPressConfirmBloodType = () => {
    setBloodTypeModalVisible(false);
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
          <Fontisto name="blood-drop" size={18} color={ColorsEnum.black} />
        )}
      />
      <View style={{ height: 8 }} />
      <BloodTypeModal
        isVisible={bloodTypeModalVisible}
        onPressHideBloodTypeModal={onPressHideBloodTypeModal}
        onPressConfirmBloodType={onPressConfirmBloodType}
        bloodTypeValue={values.bloodType}
        setFieldValue={setFieldValue}
      />
      <Pressable onPress={onPressSave}>
        <BText color="primary">Guardar cambios</BText>
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
});
