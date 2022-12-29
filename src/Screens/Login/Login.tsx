import { BText, BTextInput, GoBack } from "@components";
import { ErrorsEnum } from "@constants";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { SafeAreaView } from "react-native-safe-area-context";

const auth = getAuth();

const SigninSchema = Yup.object().shape({
  password: Yup.string().required(ErrorsEnum.Formik.Required),
  email: Yup.string()
    .email(ErrorsEnum.Formik.Email)
    .required(ErrorsEnum.Formik.Required),
});

export const Login: FC = () => {
  const { navigateToSignup } = useAppNavigation();

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SigninSchema,
      onSubmit: values => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            // userCredentials
          })
          .catch(error => {
            throw new Error(error);
          });
      },
    });

  const onPressCreateAccount = () => {
    navigateToSignup();
  };

  const isLoginDisabled =
    !values.email || !values.password || !!errors.email || !!errors.password;

  const emailError = !!errors.email && !!touched.email && !!values.email;
  const passwordError =
    !!errors.password && !!touched.password && !!values.password;

  return (
    <SafeAreaView style={styles.loginContainer}>
      <GoBack />
      <BText size="title" color="black" bold>
        Ingresa a tu cuenta
      </BText>
      <View style={{ height: 24 }} />
      <BTextInput
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        spellCheck={false}
        placeholder="Correo electrónico"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
        error={emailError}
        errorMessage={errors.email}
      />
      <View style={{ height: 16 }} />
      <BTextInput
        secureTextEntry
        placeholder="Constraseña"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        error={passwordError}
        errorMessage={errors.password}
      />
      <View style={{ height: 16 }} />
      <Pressable
        disabled={isLoginDisabled}
        style={[
          styles.loginButton,
          isLoginDisabled && {
            backgroundColor: ColorsEnum.disabledButton,
          },
        ]}
        onPress={() => handleSubmit()}
      >
        <BText color={isLoginDisabled ? "darkGray" : "white"}>Ingresar</BText>
      </Pressable>
      <View style={{ height: 16 }} />
      <Pressable style={styles.backButton} onPress={onPressCreateAccount}>
        <BText color="secondary">Crear una cuenta</BText>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorsEnum.white,
    padding: 16,
  },
  loginButton: {
    backgroundColor: ColorsEnum.secondary,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    borderColor: ColorsEnum.secondary,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
