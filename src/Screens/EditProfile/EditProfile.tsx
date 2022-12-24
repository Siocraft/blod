import { BText, BTextInput } from "@components";
import { useFormik } from "formik";
import { FC } from "react";
import { View, StyleSheet } from "react-native";

export const EditProfile: FC = () => {
  const { handleChange, handleBlur, values, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: values => {
        console.log(values);
      },
    });

  const emailError = !!errors.email && !!touched.email && !!values.email;
  const passwordError =
    !!errors.password && !!touched.password && !!values.password;

  return (
    <View style={styles.container}>
      <BText size="large" color="black" bold>
        Editar perfil
      </BText>
      <View style={{ height: 16 }} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
