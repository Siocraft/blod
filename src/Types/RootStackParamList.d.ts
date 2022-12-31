type RootStackParamList = {
  Authentication: Record<string, never>;
  Login: Record<string, never>;
  Signup: Record<string, never>;
  CompleteSignup: {
    signupValues: SignupFormValues;
  };
  App: Record<string, never>;
};
