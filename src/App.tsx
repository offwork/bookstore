import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AppShell } from './components/app-shell/app-shell';
import Books from './components/features/books/books';
import Book from './components/features/book/book';
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppShell>
          <Router>
            <Switch>
              <Route exact path="/" component={Books} />
              <Route path="/:id" component={Book} />
              <Redirect path='*' to='/' />
            </Switch>
          </Router>
        </AppShell>
      </div>
    );
  }
}

export default hot(App);