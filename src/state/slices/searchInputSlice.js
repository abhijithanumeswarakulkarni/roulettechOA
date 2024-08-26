import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    value: "",
  },
  reducers: {
    update: (state, action) => {
        state.value = action.payload
    }
  },
});

export const { update } = searchInputSlice.actions;

export default searchInputSlice.reducer;