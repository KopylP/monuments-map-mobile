import { useContext } from "react";
import { LocateContext } from "../../context/locate-context";

export const useLocate = () => {
  return useContext(LocateContext);
};
