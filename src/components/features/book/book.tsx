import React, { useEffect } from 'react';
import { Button, Card, Elevation, Spinner, Icon, Intent, Divider } from "@blueprintjs/core";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBookEntities,
  selectBookLoaded,
  fetchBook
} from '../book/book.slice';
import './book.scss';

export const Book = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const entities = useSelector(selectBookEntities);
  const loaded = useSelector(selectBookLoaded);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch]);

  return (
    <div>
      { !loaded && <Spinner size={ Spinner.SIZE_LARGE } /> }
      { !!entities &&
          (
            <Card elevation={Elevation.TWO}>
            <div className="book">
              <h2><a href="#">{entities.title}</a></h2>
              <h5>{entities.subtitle}</h5>
              <h5>{entities.publishedDate}</h5>
            </div>
            <Divider />
            <div className="">
              <span>
                <Icon icon="user" iconSize={Icon.SIZE_STANDARD} intent={Intent.NONE} />
                {entities.author}
              </span>
              <span className="publisher">
                <Icon icon="book" iconSize={Icon.SIZE_STANDARD} intent={Intent.NONE} />
                {entities.publisher}
              </span>
            </div>
            <Divider />
            <p className="description"><strong>Description: </strong>{entities.description}</p>
            <Button>New Book</Button>
          </Card>
          )
      }
    </div>
  )
}

export default Book;
