import {
  SERVER_URL
} from "@env";
import axios from "axios";
import { URL } from "react-native-url-polyfill";

export const ApiQueryKeys = {
  Hospital: "/Hospital",
  GetHospital: (id: string) => `/Hospital/${id}`,
  DonationRequest: "/DonationRequest",
  DonationRequests: "/DonationRequests",
  ThirdPartyHospitals: "/Third-party/Hospital",
  GetDonationRequest: (id: string) => `/DonationRequest/${id}`,
} as const;

export const appAxios = axios.create({
  baseURL: new URL(SERVER_URL).href,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});