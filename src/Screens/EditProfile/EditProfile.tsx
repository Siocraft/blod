import { BText, BTextInput, ProfileImage } from "@components";
import { useAuth, useUser } from "@hooks";
import { useFormik } from "formik";
import { FC } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorScreen } from "../Error";
import { Loading } from "../Loading";
import { GuestSignedIn } from "../Profile/GuestSignedIn";

export const EditProfile: FC = () => {
  const { user: authUser } = useAuth();
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(authUser?.uid);

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        bloodType: user?.bloodType,
      },
      onSubmit: submittedValues => {
        console.log(submittedValues);
      },
    });

  if(values.bloodType === undefined && user?.bloodType) setFieldValue('bloodType', user.bloodType);

  if (!authUser) return <GuestSignedIn />;
  if (isLoadingUser) return <Loading />;
  if (!user || isErrorUser) return <ErrorScreen />

  const bloodTypeError =
    !!errors.bloodType && !!touched.bloodType && !!values.bloodType;

  const onPressSave = () => {
    handleSubmit();
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
      <BTextInput
        placeholder="Tipo de Sangre"
        onChangeText={handleChange("bloodType")}
        onBlur={handleBlur("bloodType")}
        value={values.bloodType}
        error={bloodTypeError}
      />
      <View style={{ height: 8 }} />
      <Pressable onPress={onPressSave} >
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
