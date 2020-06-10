import { combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '../components/features/books/books.slice';
import { bookReducer } from '../components/features/book/book.slice';
import { searchReducer } from '../components/features/searchbox/search-box.slice';

const rootReducer = combineReducers({
  books: booksReducer,
  book: bookReducer,
  search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;