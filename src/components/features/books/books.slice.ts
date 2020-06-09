import {
  createSlice,
  createSelector,
  PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Book, BooksResponse } from '@app/model';
import { AppThunk } from '@app/store';

export const BOOKS_FEATURE_KEY = 'books';

/*
 * Change this from `any` if there is a more specific error type.
 */
export type BooksError = any;

export interface BooksState {
  entities: Book[];
  loaded: boolean;
  error: BooksError;
}

export const initialBooksState: BooksState = {
  entities: [],
  loaded: false,
  error: null
};

export const booksSlice = createSlice({
  name: BOOKS_FEATURE_KEY,
  initialState: initialBooksState as BooksState,
  reducers: {
    getBooksStart: (state, action: PayloadAction<undefined>) => {
      state.loaded = false;
      state.entities = []
    },
    getBooksSuccess: (state, action: PayloadAction<Book[]>) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getBooksFailure: (state, action: PayloadAction<BooksError>) => {
      state.error = action.payload;
    }
  }
});

/*
 * Export reducer for store configuration.
 */
export const booksReducer = booksSlice.reducer;

/* TODO: ``buradan guncellenebilir``
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * const dispatch = useDispatch();
 * dispatch(getBooksSuccess([{ id: 1 }]));
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const {
  getBooksStart,
  getBooksSuccess,
  getBooksFailure
} = booksSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * const entities = useSelector(selectBooksEntities);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
export const getBooksState = (rootState: any): BooksState =>
  rootState[BOOKS_FEATURE_KEY];

export const selectBooksEntities = createSelector(
  getBooksState,
  s => s.entities
);

export const selectBooksLoaded = createSelector(
  getBooksState,
  s => s.loaded
);

export const selectBooksError = createSelector(
  getBooksState,
  s => s.error
);

/*
 * Export default effect, handled by redux-thunk.
 * You can replace this with your own effects solution.
 */
export const fetchBooks = (): AppThunk => async dispatch => {
  const url = 'http://localhost:3000/books';

  try {
    dispatch(getBooksStart());
    // Replace this with your custom fetch call.
    // For example, `const data = await myApi.getBooks`;
    // Right now we just load an empty array.
    const data = await axios
      .get<BooksResponse>(url)
      .then(response => { console.log(response);
        return response.data.items});
    dispatch(getBooksSuccess(data));
  } catch (err) {
    dispatch(getBooksFailure(err));
  }
};
