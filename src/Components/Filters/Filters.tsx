import { useAppDispatch, useAppSelector } from "@hooks";
import {
  setBloodTypeDonationRequestsFilter,
  setBloodTypeDonorsFilter,
  setCityDonationRequestsFilter,
  setCityDonorsFilter,
} from "@services";
import { useFormik } from "formik";
import React, { FC, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BButton } from "../BButton";
import { ChooseBloodType } from "../ChooseBloodType";

interface FiltersProps {
  variant: "primary" | "secondary";
  setFiltersVisibility?: (value: boolean) => void;
  location: "donationRequests" | "donors";
}

export const Filters: FC<FiltersProps> = ({
  variant,
  setFiltersVisibility,
  location,
}) => {

  const { city, bloodType } = useAppSelector(state => state.donationRequestsFilter);
  const { donorsFiltersCity, donorsFiltersBloodType } = useAppSelector(state => state.donorsFilter);

  const dispatch = useAppDispatch();
  const { bottom } = useSafeAreaInsets();

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      bloodType: location === "donationRequests" ? bloodType : donorsFiltersBloodType,
      city: location === "donationRequests" ? city : donorsFiltersCity,
    },
    onSubmit: (values) => {
      if (location === "donationRequests") {
        dispatch(setBloodTypeDonationRequestsFilter(values.bloodType));
        dispatch(setCityDonationRequestsFilter(values.city));
      } else {
        dispatch(setBloodTypeDonorsFilter(values.bloodType));
        dispatch(setCityDonorsFilter(values.city));
      }
    },
  });

  const setRadioButtonBloodType = (bloodType: string) => {
    setFieldValue("bloodType", bloodType);
  };

  const onSaveFilters = () => {
    handleSubmit();
    setFiltersVisibility?.(false);
  };

  const onClearFilters = () => {
    setRadioButtonBloodType("");
    handleSubmit();
    setFiltersVisibility?.(false);
  };

  const disableSaveButton = useMemo(() => {
    const localBloodType = location === "donationRequests" ? bloodType : donorsFiltersBloodType;
    const localCity = location === "donationRequests" ? city : donorsFiltersCity;
    return values.bloodType === localBloodType && values.city === localCity;
  }, [ values.bloodType, values.city ]);

  const clearFiltersButtonTestVisible = disableSaveButton && (values.bloodType !== "" || values.city !== "");

  return <View style={[
    styles.modalContainer,
    { marginBottom: bottom + 64 }
  ]}>
    <View style={styles.triangle} />
    <ScrollView style={styles.container}>
      <ChooseBloodType
        variant={variant}
        selectedBloodType={values.bloodType}
        setSelectedBloodType={setRadioButtonBloodType}
      />
      {/* <ChooseCity
        variant={variant}
        selectedCity={values.city}
        setSelectedCity={(bloodType) => setFieldValue("city", bloodType)}
      /> */}
      {clearFiltersButtonTestVisible ? null : <BButton
        disabled={disableSaveButton}
        onPress={onSaveFilters}
        style={styles.saveButton}
        variant={disableSaveButton ? "disabled" : variant}
        title="Guardar"
      />}
      {clearFiltersButtonTestVisible ? <BButton
        onPress={onClearFilters}
        style={styles.saveButton}
        variant={variant}
        title="Quitar filtros"
      /> : null}
      <View style={{ height: 30 }} />
    </ScrollView>
  </View>;
};

const styles = StyleSheet.create({
  modalContainer: {
    zIndex: 1,
    marginTop: 48,
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    position: "absolute",
    top: -12,
    left: 32,
  },
  saveButton: {
    marginTop: 16,
  }
});