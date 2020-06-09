import * as React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import SerachBox from '../../searchbox/search-box'
import './header.scss';

export const Header = () => {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.CENTER}>
        <NavbarHeading>Bookstore</NavbarHeading>
        <NavbarDivider />
        <div className="shell-header">
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
          <SerachBox />
        </div>
      </NavbarGroup>
    </Navbar>
  )
}

export default Header;