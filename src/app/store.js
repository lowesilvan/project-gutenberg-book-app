import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../redux/BooksReducer/bookSlice'

export const store = configureStore({
  reducer: {
    library : bookReducer
  },
});
