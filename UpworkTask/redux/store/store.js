import {configureStore} from '@reduxjs/toolkit';
import auth from '../slice/authSlice';
import theme from '../slice/themeSlice';
export const store = configureStore({
  reducer: {
    auth,
    theme,
  },
});
