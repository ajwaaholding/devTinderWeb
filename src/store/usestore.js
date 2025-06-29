import { create } from "zustand";
import { UserSlice } from "./userSlice";

const useStore = create((set, get) => ({
  ...UserSlice(set, get),
}));

export default useStore;
