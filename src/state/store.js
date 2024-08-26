import { configureStore } from '@reduxjs/toolkit';
import searchInputSlice from './slices/searchInputSlice';
import recipeSlice from './slices/recipeSlice';

export default configureStore({
  reducer: {
    searchInput: searchInputSlice,
    recipe: recipeSlice
  },
})