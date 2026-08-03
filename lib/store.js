
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// This creates a global store that remembers the cart even if the user refreshes
export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [], // List of products in cart
      
      // Function to add a product
      addItem: (product) => {
        const currentItems = get().items;
        // Check if item already exists to increase quantity
        const existingItem = currentItems.find((item) => item.id === product.id);
        
        if (existingItem) {
          set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      // Function to remove a product
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      // Function to clear the cart
      clearCart: () => set({ items: [] }),

      // Helper to get total price
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price_usdt * item.quantity, 0);
      },
      
      // Helper to get total item count (for the navbar badge)
      getTotalCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage', // Name of the item in localStorage
    }
  )
);
