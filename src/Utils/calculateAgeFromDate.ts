export const calculateAgeFromDate = (isoDate?: string) => {
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
