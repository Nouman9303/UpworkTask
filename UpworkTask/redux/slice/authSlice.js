import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  userInfo: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {loginInfo} = authSlice.actions;

export default authSlice.reducer;
