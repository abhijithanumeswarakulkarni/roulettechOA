import { createSlice } from '@reduxjs/toolkit'

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipes: null,
    originalRecipes: null,
    selectedRecipe: null,
    recipeDetails: null
  },
  reducers: {
    fetchRecipes: (state, action) => {
        state.recipes = action.payload
        state.originalRecipes = action.payload
    },
    updateRecipes: (state, action) => {
        state.recipes = action.payload
    },
    updateSelectedRecipe: (state, action) => {
        state.selectedRecipe = action.payload
    },
    updateRecipeDetails: (state, action) => {
        state.recipeDetails = action.payload
    }
  },
});

export const { fetchRecipes, updateRecipes, updateSelectedRecipe, updateRecipeDetails } = recipeSlice.actions;

export default recipeSlice.reducer;