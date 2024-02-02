enum BloodTypes {
  "A+" = "A+",
  "A-" = "A-",
  "B+" = "B+",
  "B-" = "B-",
  "AB+" = "AB+",
  "AB-" = "AB-",
  "O+" = "O+",
  "O-" = "O-",
}

type BloodTypesArray = BloodType[]

type BloodType = keyof typeof BloodTypes;
