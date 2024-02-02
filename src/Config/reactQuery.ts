import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export enum QueryKeys {
  USER = "user",
  USERS = "users",
  HOSPITALS = "hospitals",
  HOSPITAL = "hospital",
  DONATION_REQUESTS = "donationRequests",
  CREATE = "create",
  GET_ALL = "getAll",
  THIRD_PARTY_HOSPITALS = "thirdPartyHospitals",
  DONORS = "donors",  
}
