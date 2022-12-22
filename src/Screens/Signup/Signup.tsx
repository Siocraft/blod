import { BText, BTextInput } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorsEnum } from "@constants";
import { createUser } from "@services";
import * as Yup from 'yup';

const auth = getAuth();

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, ErrorsEnum.Formik.SignUp.tooShort)
    .max(50, ErrorsEnum.Formik.SignUp.tooLong)
    .required(ErrorsEnum.Formik.Required),
  email: Yup.string().email(ErrorsEnum.Formik.Email).required(ErrorsEnum.Formik.Required),
  passwordConfirmation: Yup.string()
   .oneOf([Yup.ref('password'), null], ErrorsEnum.Formik.SignUp.passwordMismatch)
});

export const Signup: FC = () => {

  const { goBack, navigateToLogin } = useAppNavigation();

  const { handleChange, handleBlur, values, handleSubmit, errors, touched, validateOnBlur } = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: SignupSchema,
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

  const isCreateAccountDisabled = 
    !values.email ||
    !values.password ||
    !values.passwordConfirmation ||
    !!errors.email ||
    !!errors.password ||
    !!errors.passwordConfirmation;

  const emailError = !!errors.email && !!touched.email && !!values.email;
  const passwordError = !!errors.password && !!touched.password && !!values.password;
  const passwordConfirmationError = !!errors.passwordConfirmation && !!touched.passwordConfirmation && !!values.passwordConfirmation;

  return <View style={styles.loginContainer}>
    <BText size="large" color="black" bold>¡Regístrate!</BText>
    <View style={{ height: 16 }}/>
    <BTextInput
      textContentType='emailAddress'
      keyboardType='email-address'
      autoCapitalize='none'
      autoCorrect={false}
      autoComplete='email'
      spellCheck={false}
      placeholder="Correo electrónico"
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
      error={emailError}
      errorMessage={errors.email}
    />
    <View style={{ height: 8 }}/>
    <BTextInput
      secureTextEntry
      placeholder="Constraseña"
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
      error={passwordError}
      errorMessage={errors.password}
    />
    <View style={{ height: 8 }}/>
    <BTextInput
      secureTextEntry
      placeholder="Confirmar contraseña"
      onChangeText={handleChange('passwordConfirmation')}
      onBlur={handleBlur('passwordConfirmation')}
      value={values.passwordConfirmation}
      error={passwordConfirmationError}
      errorMessage={errors.passwordConfirmation}
    />
    <View style={{ height: 8 }}/>
    <Pressable
      disabled={isCreateAccountDisabled}
      style={[
        styles.createAccountButton,
        isCreateAccountDisabled && styles.createAccountButtonDisabled
      ]}
      onPress={onCreateAccount}
    >
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
  createAccountButton: {
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
  createAccountButtonDisabled: {
    backgroundColor: ColorsEnum.disabledButton,
  }
});