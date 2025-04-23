
import { create } from 'zustand';

type CategoryStore = {
  selectedCategory: 'garden' | 'home';
  setSelectedCategory: (category: 'garden' | 'home') => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: 'garden',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
