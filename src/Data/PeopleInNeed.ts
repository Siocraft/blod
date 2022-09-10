import { faker } from "@faker-js/faker";

interface PeopleInNeed {
  id: string;
  name: string;
  age: number;
  bloodType: string;
  location: string;
  hospital?: string;
  contact: string;
  litersDonated: number;
  avatar: string;
}

const createPeopleInNeed = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    age: faker.datatype.number({ min: 18, max: 60 }),
    bloodType: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"][faker.datatype.number({ min: 0, max: 7 })],
    location: faker.address.city(),
    hospital: faker.company.name(),
    contact: faker.phone.number(),
    litersDonated: faker.datatype.number({ min: 0, max: 10 }),
    avatar: faker.image.avatar(),
  };
}

export const peopleInNeed: PeopleInNeed[] = Array.from({ length: 20 }, createPeopleInNeed);