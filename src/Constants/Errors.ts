export const ErrorsEnum = {
  Firebase: {
    Auth: {
      EmailAlreadyInUse: 'auth/email-already-in-use',
      InvalidEmail: 'auth/invalid-email',
    }
  },
  Formik: {
    Required: 'Campo requerido',
    Email: 'Correo inválido',
    SignUp: {
      tooShort: 'Contraseña muy corta',
      tooLong: 'Contraseña muy larga',
      passwordMismatch: 'Las contraseñas no coinciden',
    }
  }
}