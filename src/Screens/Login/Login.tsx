import { BText } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import React, { FC } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const auth = getAuth();

export const Login: FC = () => {

  const { goBack } = useAppNavigation();

  const { handleChange, handleBlur, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          console.log('User logged in');
        })
        .catch(error => {
          throw new Error(error);
        });
    },
  });

  return <View style={styles.loginContainer}>
    <BText size="large" color="black">Ingresa a tu cuenta</BText>
    <TextInput
      placeholder="email"
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
    />
    <TextInput
      placeholder="password"
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
    />
    <Pressable style={styles.loginButton} onPress={() => handleSubmit()}>
      <BText color="white">Ingresar</BText>
    </Pressable>
    <View style={{ height: 8 }}/>
    <Pressable style={styles.backButton} onPress={() => handleSubmit()}>
      <BText color="secondary">Crear una cuenta</BText>
    </Pressable>
    <View style={{ height: 16 }}/>
    <Pressable onPress={goBack}>
      <BText color="secondary">Regresar</BText>
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