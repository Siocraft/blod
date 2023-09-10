import { BButton, BText, BTextInput, GoBack } from "@components";
import { ErrorsEnum } from "@constants";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

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
      <View style={{ marginLeft: -16 }}>
        <GoBack />
      </View>
      <BText style={{ alignSelf: "center", marginTop: 16 }} size="title" color="black" bold>
        Ingresa a tu cuenta
      </BText>
      <View style={{ height: 24 }} />
      <BTextInput
        label="Correo electrónico"
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
        icon={() => <Entypo name="email" size={16} color={emailError ? ColorsEnum.error : ColorsEnum.secondary} />}
      />
      <View style={{ height: 16 }} />
      <BTextInput
        label="Contraseña"
        secureTextEntry
        placeholder="Constraseña"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
        error={passwordError}
        errorMessage={errors.password}
        icon={() => <MaterialCommunityIcons name="form-textbox-password" size={16} color={passwordError ? ColorsEnum.error : ColorsEnum.secondary} />}
      />
      <View style={{ height: 16 }} />
      <BButton
        title="Ingresar"
        disabled={isLoginDisabled}
        variant={isLoginDisabled ? "disabled" : "secondary"}
        onPress={() => handleSubmit()}
      />
      <View style={{ height: 16 }} />
      <BButton
        title="Crear una cuenta"
        variant="secondary-void"
        onPress={onPressCreateAccount}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
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
