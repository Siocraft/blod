interface DonationRequest {
  id: string;
  name: string;
  age: number;
  bloodType: string;
  location: string;
  hospital?: string;
  contact: string;
  litersDonated: number;
  avatar: string;
  description?: string;
}