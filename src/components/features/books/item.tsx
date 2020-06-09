import React from 'react';
import { Card, Elevation, Text, H4, H6 } from "@blueprintjs/core";
import { Book } from '@app/model';

/* eslint-disable-next-line */
export interface BookItemProps {
  book?: Book
}

export const BookItem = (props: BookItemProps) => {
  return (
    <Card interactive={true} elevation={ Elevation.TWO }>
      <H4><a href="">{props.book?.title}</a></H4>
      <H6>{props.book?.author}</H6>
      <div>
        <Text ellipsize={true}>
          {props.book?.description}
          &nbsp;
        </Text>
        <span>{props.book?.publisher}</span>
      </div>
    </Card>
  );
};

export default BookItem;
