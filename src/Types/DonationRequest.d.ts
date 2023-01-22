interface DonationRequest {
  id: string;
  name: string;
  firstname: string;
  age: number;
  bloodType: `${BloodTypes}`;
  city: string;
  hospital?: string;
  contact: string;
  litersDonated: number;
  avatar: string;
  description?: string;
}
