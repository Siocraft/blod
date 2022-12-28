import { Months } from "@constants";

export const isoDateToDdMmYyyy = (isoDate?: string) => {
  if(!isoDate) return "";
  const date = new Date(isoDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export const isoDateToDayMonthYear = (isoDate?: string) => {
  if(!isoDate) return "";
  const date = new Date(isoDate);
  return `${date.getDate()} de ${Months[date.getMonth()]} del ${date.getFullYear()}`;
}