import { AppDispatch } from "@services";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();