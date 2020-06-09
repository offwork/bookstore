import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import { AppShell } from './components/app-shell/app-shell';
import { Books } from './components/books/books';
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppShell>
          <Router>
            <Switch>
              <Route exact path="/" component={Books} />
              <Redirect path='*' to='/' />
            </Switch>
          </Router>
        </AppShell>
      </div>
    );
  }
}

export default hot(App);