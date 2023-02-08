import { create } from "zustand";
import { Valueprops } from "./Interface";
export const useStore = create<Valueprops>((set) => ({
  value: 99,
}));
