import { CartItem, Product } from "@/types/types";
import { randomUUID } from "expo-crypto";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
type State = {
  items: CartItem[];
  total: number;
};
type Actions = {
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: 1 | -1) => void;
  calculateTotal: (total: number) => void;
};
export const useStore = create<State & Actions>()(
  subscribeWithSelector(
    immer((set) => ({
      items: [],
      total: 0,
      addItem: (product, size) =>
        set((state) => {
          const itemInCart = state.items.find(
            (item) => item.product_id === product.id && item.size === size
          );

          if (itemInCart) {
            itemInCart.quantity += 1;
          } else {
            const newCartItem = {
              id: randomUUID(),
              product,
              product_id: product.id,
              size,
              quantity: 1,
            };

            state.items = [newCartItem, ...state.items]; // Use spread operator to create a new array
          }
        }),
      updateQuantity: (itemId, amount) =>
        set((state) => {
          const itemInCart = state.items.find((item) => item.id === itemId);
          if (itemInCart) {
            itemInCart.quantity += amount;
            // Remove item from the array if quantity is 0
            if (itemInCart.quantity <= 0) {
              state.items = state.items.filter((item) => item.id !== itemId);
            }
          }
        }),
      calculateTotal: (total) =>
        set((state) => {
          state.total = total;
        }),
    }))
  )
);

//NOTE - Zustand and immer gotcha
// For objects: Directly mutate properties inside set.
// For arrays: Assign a new array reference to be safe, even though Immer technically allows direct mutations.
