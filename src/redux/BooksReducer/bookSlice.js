import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  books: [],
  loading: false,
  error: "",
  favorites: [],
};

// Get books with asyncthunk
export const getBooks = createAsyncThunk(
  "library/getBooks",
  async (thunkAPI) => {
    // console.log("in getbooks thunk");
    return fetch("https://gnikdroy.pythonanywhere.com/api/book/").then((res) =>
      res.json()
    );
    // console.log("gets data from api");
  }
);

// create slice
export const bookSlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    // update favorite books
    favBooks(state, action) {
      const { book, isFavourite } = action.payload;
      const findBook = state.favorites.find((f) => book.id === f.id);
      if (findBook) {
        const newfav = state.favorites.filter((fav) => fav.id !== findBook.id);
        return { ...state, favorites: newfav };
      }
      return {
        ...state,
        favorites: [...state.favorites, { ...book, isFavourite }],
      };
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.books = payload;
    },
    [getBooks.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log("Error Message ", payload);
      state.error = "ERR_INTERNET_DISCONNECTED";
    },
  },
});

export const { favBooks } = bookSlice.actions;

export default bookSlice.reducer;
