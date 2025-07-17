import { Store } from "@/types/store";
import { create } from "zustand";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create<Store>()(persist((...a) => ({
    ...cartSlice(...a),
    ...authSlice(...a)
}), {
    name: "store",
    storage: createJSONStorage(() => AsyncStorage)
}))