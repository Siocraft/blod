import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export enum QueryKeys {
  USER = "user",
  USERS = "users",
  HOSPITALS = "hospitals",
  DONATION_REQUESTS = "donationRequests",
  CREATE = "create",
  GET_ALL = "getAll"
}
