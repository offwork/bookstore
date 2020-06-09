import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBooks,
  selectBooksEntities,
  selectBooksLoaded
} from './books.slice';
import BookList from './list';
import './books.scss';



export const Books = () => {
  const dispatch = useDispatch();
  const entities = useSelector(selectBooksEntities);
  const loaded = useSelector(selectBooksLoaded);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <BookList isLoading={loaded} list={entities} className="" />
    </div>
  );
};

export default Books;
