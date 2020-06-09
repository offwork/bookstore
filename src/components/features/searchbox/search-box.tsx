import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksSuccess, getBooksStart } from '../books/books.slice';
import {
  searchBooks,
  selectSearchEntities,
  selectSearchLoaded
} from './search-box.slice';
import './search-box.scss';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const [currentQuery, setCurrentQuery] = useState('');
  // new books with search results
  const entities = useSelector(selectSearchEntities);
  // if the loaded is true, the books state update with search result
  const loaded = useSelector(selectSearchLoaded);

  useEffect(() => {
    if (loaded) {
      dispatch(getBooksSuccess(entities));
    }
  }, undefined);

  const onChangeBookQuery = (query: string) => {
    dispatch(searchBooks(query));
    // needed to clear entities in `booksReducer`
    dispatch(getBooksStart());
  };

  return (
    <div className="bp3-control-group bp3-fill">
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search"></span>
        <input type="text"
          className="bp3-input"
          value={currentQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentQuery(e.target.value)}
          placeholder="Find books..." />
      </div>
      <button className="bp3-button bp3-intent-primary" onClick={() => onChangeBookQuery(currentQuery)}>
        <span className="bp3-icon bp3-icon-arrow-right"></span>
      </button>
    </div>
  )
}

export default SearchBox;
