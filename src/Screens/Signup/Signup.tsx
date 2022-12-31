import { BText, BTextInput, GoBack } from "@components";
import { ErrorsEnum } from "@constants";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import * as Yup from "yup";

export type SignUpFormValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, ErrorsEnum.Formik.SignUp.tooShort)
    .max(50, ErrorsEnum.Formik.SignUp.tooLong)
    .required(ErrorsEnum.Formik.Required),
  email: Yup.string()
    .email(ErrorsEnum.Formik.Email)
    .required(ErrorsEnum.Formik.Required),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    ErrorsEnum.Formik.SignUp.passwordMismatch
  ),
});

const initialValues: SignUpFormValues = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const Signup: FC = () => {
  const { navigateToLogin, navigateToCompleteSignup } = useAppNavigation();

  const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: submittedValues => {
        navigateToCompleteSignup(submittedValues);
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
  const passwordError =
    !!errors.password && !!touched.password && !!values.password;
  const passwordConfirmationError =
    !!errors.passwordConfirmation &&
    !!touched.passwordConfirmation &&
    !!values.passwordConfirmation;

  return (
    <View style={styles.loginContainer}>
      <GoBack />
      <BText size="title" color="black" bold>
        ¡Regístrate!
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
      <BTextInput
        secureTextEntry
        placeholder="Confirmar contraseña"
        onChangeText={handleChange("passwordConfirmation")}
        onBlur={handleBlur("passwordConfirmation")}
        value={values.passwordConfirmation}
        error={passwordConfirmationError}
        errorMessage={errors.passwordConfirmation}
      />
      <View style={{ height: 16 }} />
      <Pressable
        disabled={isCreateAccountDisabled}
        style={[
          styles.createAccountButton,
          isCreateAccountDisabled && styles.createAccountButtonDisabled,
        ]}
        onPress={onCreateAccount}
      >
        <BText color={isCreateAccountDisabled ? "darkGray" : "white"}>
          Crear cuenta
        </BText>
      </Pressable>
      <View style={{ height: 16 }} />
      <Pressable style={styles.backButton} onPress={onAlreadyHaveAnAccount}>
        <BText color="secondary">Ya tengo una cuenta</BText>
      </Pressable>
    </View>
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
  },
});
