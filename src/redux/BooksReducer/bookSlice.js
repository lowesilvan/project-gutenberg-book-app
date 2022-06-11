import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  books: [],
  loading: false,
  error: "",
  favorites: [],
};

// Get books with thunk
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

// get next 0r previous page thunk
export const getNext = createAsyncThunk(
  "library/getBooks",
  async (url, thunkAPI) => {
    // console.log("in getbook thunk runs");
    return fetch(url).then((res) => res.json());
    // console.log("gets data from api");
  }
);

// get specific book from input
export const getPageNum = createAsyncThunk(
  "library/getBooks",
  async (url, thunkAPI) => {
    // console.log("in getbooks thunk");
    return fetch(url).then((res) => res.json());
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
    // clear favorite books
    emptyFavBooks(state) {
      return {...state, favorites: []}
    }
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

export const { favBooks, searchQuery, emptyFavBooks } = bookSlice.actions;

export default bookSlice.reducer;
