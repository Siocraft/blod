type BloodTypesArray = BloodType[]

interface DonationRequest {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
  bloodType: BloodTypesArray;
  city: string;
  hospital: string;
  contact: string;
  litersDonated: number;
  avatar: string;
  description?: string;
  createdAt: string;
  hospitalId: string;
}
