
import { create } from 'zustand';

type CategoryStore = {
  selectedCategory: 'garden' | 'home' | null;
  setSelectedCategory: (category: 'garden' | 'home' | null) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: 'garden',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
