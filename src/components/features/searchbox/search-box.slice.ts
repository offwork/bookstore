import {
  createSlice,
  createSelector,
  PayloadAction
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Book, BooksResponse } from '@app/model';
import { AppThunk } from '@app/store';

export const SEARCH_FEATURE_KEY = 'search';
/*
 * Change this from `any` if there is a more specific error type.
 */
export type SearchError = any;

export interface SearchState {
  entities: Book[];
  query: string;
  loaded: boolean;
  error: SearchError;
}

export const initialSearchState: SearchState = {
  entities: [],
  query: '',
  loaded: false,
  error: null
};

export const searchSlice = createSlice({
  name: SEARCH_FEATURE_KEY,
  initialState: initialSearchState as SearchState,
  reducers: {
    getSearchStart: (state, action: PayloadAction<string>) => {
      state.loaded = false;
      state.query = action.payload;
    },
    getSearchSuccess: (state, action: PayloadAction<Book[]>) => {
      state.loaded = true;
      state.entities = action.payload;
    },
    getSearchFailure: (state, action: PayloadAction<SearchError>) => {
      state.error = action.payload;
      state.loaded = true;
    }
  }
});

export const searchReducer = searchSlice.reducer;

export const {
  getSearchStart,
  getSearchSuccess,
  getSearchFailure
} = searchSlice.actions;

export const getSearchState = (rootState: any): SearchState =>
  rootState[SEARCH_FEATURE_KEY];

export const selectSearchEntities = createSelector(
  getSearchState,
  s => s.entities
);

export const selectSearchQuery = createSelector(
  getSearchState,
  s => s.query
);

export const selectSearchLoaded = createSelector(
  getSearchState,
  s => s.loaded
);

export const selectSearchError = createSelector(
  getSearchState,
  s => s.error
);

export const searchBooks = (query: string): AppThunk => async dispatch => {
  const url = query.length < 1 ?
    'http://localhost:3000/books' :
    `http://localhost:3000/books?q=${query}`;

  try {
    dispatch(getSearchStart(query))
    const data = await axios
      .get<BooksResponse>(url)
      .then(response => { console.log(response);
        return response.data.items});
    dispatch(getSearchSuccess(data));
  } catch (err) {
    dispatch(getSearchFailure(err));
  }
};
