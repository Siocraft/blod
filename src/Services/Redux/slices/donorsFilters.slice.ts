
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface DonorsFiltersState {
  donorsFiltersBloodType: BloodType | "";
  donorsFiltersCity: string;
}

const initialState: DonorsFiltersState = {
  donorsFiltersBloodType: "",
  donorsFiltersCity: "",
};

export const DonorsFiltersSlice = createSlice({
  name: "DonorsFilters",
  initialState,
  reducers: {
    setBloodTypeDonorsFilter: (state, action: PayloadAction<DonorsFiltersState["donorsFiltersBloodType"]>) => {
      state.donorsFiltersBloodType = action.payload;
    },
    setCityDonorsFilter: (state, action: PayloadAction<string>) => {
      state.donorsFiltersCity = action.payload;
    },
  },
});

export const {
  setBloodTypeDonorsFilter,
  setCityDonorsFilter
} = DonorsFiltersSlice.actions;

export default DonorsFiltersSlice.reducer;