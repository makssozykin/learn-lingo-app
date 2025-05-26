import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favourites: [],
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    setTeachers(state, action) {
      state.items = action.payload;
    },
    setFavourites(state, action) {
      const teacherFind = state.items.find(
        teacher => teacher.avatar_url === action.payload.avatar_url
      );
      if (teacherFind) state.favourites.push(action.payload);
    },
    removeFavourites(state, action) {
      state.favourites = state.favourites.filter(
        teacher => teacher.avatar_url !== action.payload.avatar_url
      );
    },
  },
});

export const { setTeachers, setFavourites, removeFavourites } =
  teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
