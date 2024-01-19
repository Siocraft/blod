export const isoDateToDdMmYyyy = (isoDate?: string) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};