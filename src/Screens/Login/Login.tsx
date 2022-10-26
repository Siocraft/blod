import { BText } from "@components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from 'formik';
import React, { FC } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const auth = getAuth();

export const Login: FC = () => {

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
    <BText>Log in Screen</BText>
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
    <Pressable onPress={() => handleSubmit()}>
      <BText>Log in</BText>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});