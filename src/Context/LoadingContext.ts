import { createContext } from "react";

export const LoadingContext = createContext({
  loading: false,
  message: "",
  showLoading: ( /* _message: string */ ) => { return; },
  hideLoading: () => { return; },
});
