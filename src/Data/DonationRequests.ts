import { Data } from "@constants";
import { faker } from "@faker-js/faker";

const createDonationRequest = () => {

  const avatar = faker.image.avatar();

  return {
    id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    age: faker.datatype.number({ min: 18, max: 60 }),
    bloodType: Data.BloodTypes[faker.datatype.number({ min: 0, max: 7 })],
    city: faker.address.city(),
    hospital: faker.company.name(),
    contact: faker.phone.number(),
    litersDonated: faker.datatype.number({ min: 0, max: 10 }),
    avatar,
    description: faker.lorem.paragraph(),
  } as DonationRequest;
};

export const donationRequests: DonationRequest[] = Array.from(
  { length: 20 },
  createDonationRequest
);
