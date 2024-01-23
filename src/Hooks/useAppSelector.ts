import { RootState } from "@services";
import { useSelector } from "react-redux";

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => useSelector(selector, equalityFn);