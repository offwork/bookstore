import { combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '../components/books/books.slice';

const rootReducer = combineReducers({
  books: booksReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;