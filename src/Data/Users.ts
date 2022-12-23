import { faker } from "@faker-js/faker";

const createUser = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    age: faker.datatype.number({ min: 18, max: 60 }),
    bloodType: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"][
      faker.datatype.number({ min: 0, max: 7 })
    ],
    location: faker.address.city(),
    hospital: faker.company.name(),
    contact: faker.phone.number(),
    litersDonated: faker.datatype.number({ min: 0, max: 10 }),
    avatar: faker.image.avatar(),
    description: faker.lorem.paragraph(),
  } as User;
};

export const users: User[] = Array.from({ length: 10 }, createUser);
