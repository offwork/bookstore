import {
  createSlice,
  createSelector,
  PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Book, BooksResponse } from '@app/model';
import { AppThunk } from '@app/store';

export const BOOK_FEATURE_KEY = 'book';

export type BookError = any;

export interface BooksState {
  entities: Book | null;
  loaded: boolean;
  error: BookError;
}

export const initialBooksState: BooksState = {
  entities: null,
  loaded: false,
  error: null
};

export const bookSlice = createSlice({
  name: BOOK_FEATURE_KEY,
  initialState: initialBooksState as BooksState,
  reducers: {
    getBookStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
    },
    getBookSuccess: (state, action: PayloadAction<Book>) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getBookFailure: (state, action: PayloadAction<BookError>) => {
      state.error = action.payload;
    }
  }
});

export const bookReducer = bookSlice.reducer;

export const {
  getBookStart,
  getBookSuccess,
  getBookFailure
} = bookSlice.actions;

export const getBooksState = (rootState: any): BooksState =>
  rootState[BOOK_FEATURE_KEY];

export const selectBookEntities = createSelector(
  getBooksState,
  s => s.entities
);

export const selectBookLoaded = createSelector(
  getBooksState,
  s => s.loaded
);

export const selectBookError = createSelector(
  getBooksState,
  s => s.error
);

export const fetchBook = (id: string | number): AppThunk => async dispatch => {
  const url = `http://localhost:3000/books/${id}`;

  try {
    dispatch(getBookStart());
    const data = await axios
      .get<BooksResponse>(url)
      .then(response => { console.log(response);
        return response.data.items});
    dispatch(getBookSuccess(data[0]));
  } catch (err) {
    dispatch(getBookFailure(err));
  }
};
