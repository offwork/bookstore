import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import "./styles.scss";

interface AppProps {
   name: string
}

class App extends React.Component<AppProps> {
  render() {
    const { name } = this.props;
    return <div className="app">Hello {name}</div>;
  }
}

export default hot(App);