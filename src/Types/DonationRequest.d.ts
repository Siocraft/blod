interface DonationRequest {
  id: string;
  name: string;
  age: number;
  bloodType: `${BloodTypes}`;
  location: string;
  hospital?: string;
  contact: string;
  litersDonated: number;
  avatar: string;
  description?: string;
}

enum BloodTypes {
  "A+" = "A+",
  "A-" = "A-",
  "B+" = "B+",
  "B-" = "B-",
  "AB+" = "AB+", 
  "AB-" = "AB-",
  "O+" = "O+",
  "O-" = "O-"
}