import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserSlice } from "./userSlice";

const useStore = create(
  devtools(
    (set, get) => ({
      ...UserSlice(set, get),
    }),
    { name: "MyAppStore" } // optional name shown in Redux DevTools
  )
);

export default useStore;
