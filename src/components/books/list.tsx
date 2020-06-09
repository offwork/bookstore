import React from 'react';
import { Spinner } from "@blueprintjs/core";
import { Book } from '@app/model';
import BookItem from './item';

/* eslint-disable-next-line */
export interface BookListProps {
  isLoading: boolean;
  list: Array<Book>;
  className: string
}

export const BookList = (props: BookListProps) => {
  return (
    <div className={props.className}>
      { !props.isLoading && <Spinner size={ Spinner.SIZE_LARGE } /> }
      { !!props.list &&
          (props.list.map(book => (
            <div key={book.id}>
              <BookItem book={book} />
            </div>
        )))
      }
    </div>
  );
};

export default BookList;
