import { Product } from "@/types/Product";
import { StateCreator } from "zustand";

type CartState = {
  items: any;
};

type CartAction = {
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  resetCart: () => void;
};

export type CartSlice = CartState & CartAction;

const initialState: CartState = {
  items: [],
};

const cartSlice: StateCreator<CartSlice> = (set) => ({
  ...initialState,
  addProduct: (product: Product) => {
    set((state) => ({
      items: [...state.items, product],
    }));
  },
  removeProduct: (product: any) => {
    set((state) => ({
      items: state.items.filter((item: any) => item.id !== product.id),
    }));
  },
  resetCart: () => set({ items: [] }),
});

export default cartSlice;
