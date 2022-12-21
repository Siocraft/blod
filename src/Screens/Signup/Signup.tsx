import { BText, BTextInput } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorsEnum } from "@constants";
import { createUser } from "@services";

const auth = getAuth();

export const Signup: FC = () => {

  const { goBack, navigateToLogin } = useAppNavigation();

  const { handleChange, handleBlur, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          createUser(userCredential.user.uid)
        })
        .catch(error => {
          if (error.code === ErrorsEnum.Firebase.Auth.EmailAlreadyInUse) {
            console.log('That email address is already in use!');
          }
          if (error.code === ErrorsEnum.Firebase.Auth.EmailAlreadyInUse) {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
      });
    },
  });

  const onCreateAccount = () => handleSubmit();

  const onAlreadyHaveAnAccount = () => navigateToLogin();

  return <View style={styles.loginContainer}>
    <BText size="large" color="black" bold>¡Regístrate!</BText>
    <View style={{ height: 16 }}/>
    <BTextInput
      placeholder="Correo electrónico"
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
    />
    <View style={{ height: 8 }}/>
    <BTextInput
      placeholder="Constraseña"
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
    />
    <View style={{ height: 8 }}/>
    <BTextInput
      placeholder="Confirmar contraseña"
      onChangeText={handleChange('confirmPassword')}
      onBlur={handleBlur('confirmPassword')}
      value={values.confirmPassword}
    />
    <View style={{ height: 8 }}/>
    <Pressable style={styles.loginButton} onPress={onCreateAccount}>
      <BText color="white">Crear cuenta</BText>
    </Pressable>
    <View style={{ height: 8 }}/>
    <Pressable style={styles.backButton} onPress={onAlreadyHaveAnAccount}>
      <BText color="secondary">Ya tengo una cuenta</BText>
    </Pressable>
    <View style={{ height: 16 }}/>
    <Pressable onPress={goBack}>
      <BText color="primary" bold>Regresar</BText>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorsEnum.backgroundSecondary,
    padding: 16
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