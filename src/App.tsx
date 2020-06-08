import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppShell } from './components/app-shell/app-shell';
import "./app.scss";

interface AppProps {
   name: string
}

class App extends React.Component<AppProps> {
  render() {
    const { name } = this.props;
    return (
      <div className="app">
        <AppShell />
      </div>
    );
  }
}

export default hot(App);