interface User {
  id: string;
  name: string;
  age: number;
  bloodType: BloodType;
  location: string;
  hospital?: string;
  contact?: string;
  email?: string;
  litersDonated: number;
  avatar: string;
  description?: string;
  birthDate?: string;
}
