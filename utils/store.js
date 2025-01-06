
import { create } from 'zustand';

export const useStoreCount = create((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () =>
        set((state) => {
            if (state.count > 0) {
                return { count: state.count - 1 };
            }
            return state;
        }),
    setCount: (count) => set({ count }),
}));
