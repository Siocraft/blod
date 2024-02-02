interface Donor {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
  bloodType: BloodType;
  city: string;
  hospital: string;
  contact: string;
  litersDonated: number;
  avatar: string;
  description?: string;
}