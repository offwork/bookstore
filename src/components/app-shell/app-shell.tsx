import React, { ReactNode, Component } from 'react';
import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

import './app-shell.scss';

/* eslint-disable-next-line */
type LayoutProps = {
  children: {
    header: ReactNode,
    content: ReactNode,
    footer: ReactNode
  }
}

class Layout extends Component<LayoutProps> {
  render() {
    // there will be compile-time error if forgets to identify children
    const { header, content, footer } = this.props.children;
    return (
      <div className="layout">
        <div className="header">{header}</div>
        <div className="content">{content}</div>
        <div className="footer">{footer}</div>
      </div>
    );
  }
}

/* eslint-disable-next-line */
export interface AppShellProps {
  children?: ReactNode
}

export const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <Layout>
      {{
        header: <Header />,
        content: <Content >{children}</Content>,
        footer: <Footer />
      }}
    </Layout>
  );
};

export default AppShell;
