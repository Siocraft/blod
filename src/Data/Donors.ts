import { Data } from "@constants";
import { faker } from "@faker-js/faker";

const createDonorCard = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    firstName: faker.name.firstName(),
    bloodType: Data.BloodTypes[faker.datatype.number({ min: 0, max: 7 })],
    city: faker.address.city(),
    litersDonated: faker.datatype.number({ min: 0, max: 10 }),
    avatar: faker.image.avatar(),
    description: faker.lorem.paragraph(),
    isAvailableToDonate: faker.datatype.boolean(),
  } as DonorCard;
};

export const donorCards: DonorCard[] = Array.from(
  { length: 20 },
  createDonorCard
);
