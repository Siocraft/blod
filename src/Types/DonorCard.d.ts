interface DonorCard {
  id: string;
  name: string;
  avatar: string;
  bloodType: `${BloodTypes}`;
  city: string;
  description: string;
  litersDonated: number;
  isAvailableToDonate: boolean;
}
