
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  bloodType: BloodType | "";
  city: string;
}

const initialState: FiltersState = {
  bloodType: "",
  city: "",
};

export const DonationRequestsFiltersSlice = createSlice({
  name: "DonationRequestsFilters",
  initialState,
  reducers: {
    setBloodTypeDonationRequestsFilter: (state, action: PayloadAction<FiltersState["bloodType"]>) => {
      state.bloodType = action.payload;
    },
    setCityDonationRequestsFilter: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setBloodTypeDonatorsFilter: (state, action: PayloadAction<FiltersState["bloodType"]>) => {
      state.bloodType = action.payload;
    },
    setCityDonatorsFilter: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {
  setBloodTypeDonationRequestsFilter,
  setCityDonationRequestsFilter,
  setBloodTypeDonatorsFilter,
  setCityDonatorsFilter
} = DonationRequestsFiltersSlice.actions;

export default DonationRequestsFiltersSlice.reducer;