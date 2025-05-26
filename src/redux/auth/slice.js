import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    refreshUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, refreshUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
