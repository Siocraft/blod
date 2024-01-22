
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DonationRequestsFiltersState {
  bloodType: BloodType | "";
  city: string;
}

const initialState: DonationRequestsFiltersState = {
  bloodType: "",
  city: "",
};

export const DonationRequestsFiltersSlice = createSlice({
  name: "DonationRequestsFilters",
  initialState,
  reducers: {
    setBloodTypeDonationRequestsFilter: (state, action: PayloadAction<DonationRequestsFiltersState["bloodType"]>) => {
      state.bloodType = action.payload;
    },
    setCityDonationRequestsFilter: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setBloodTypeDonationRequestsFilter, setCityDonationRequestsFilter } = DonationRequestsFiltersSlice.actions;

export default DonationRequestsFiltersSlice.reducer;