import { Months } from "@constants";

export const isoDateToDdMmYyyy = (isoDate?: string) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const isoDateToDayMonthYear = (isoDate?: string) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return `${date.getDate()} de ${
    Months[date.getMonth()]
  } del ${date.getFullYear()}`;
};

export const getAge = (isoDate?: string) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1;
  }
  return age;
};
