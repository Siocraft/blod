import axios from "axios";
import {
  SERVER_URL
} from "@env";
import { URL } from 'react-native-url-polyfill';

export const ApiQueryKeys = {
  Hospital: "/Hospital",
  DonationRequest: "/DonationRequest",
  DonationRequests: "/DonationRequests",
  GetDonationRequest: (id: string) => `/DonationRequest/${id}`,
} as const;

export const appAxios = axios.create({
  baseURL: new URL(SERVER_URL).href,
  headers: {
    "Content-Type": "application/json",
    Authorization: '',
  },
});