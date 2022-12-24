import { BText, BTextInput, ProfileImage } from "@components";
import { useAuth, useUser } from "@hooks";
import { useFormik } from "formik";
import { FC } from "react";
import { View, StyleSheet } from "react-native";
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

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        password: "",
      },
      onSubmit: values => {
        console.log(values);
      },
    });

  if (!authUser) return <GuestSignedIn />;
  if (isLoadingUser) return <Loading />;
  if (!user || isErrorUser) return <ErrorScreen />;

  const passwordError =
    !!errors.password && !!touched.password && !!values.password;

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
        secureTextEntry
        placeholder="Constraseña"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        error={passwordError}
        errorMessage={errors.password}
      />
      <View style={{ height: 8 }} />
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
