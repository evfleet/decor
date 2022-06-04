import React from 'react';

import Link from './Link';
import Logo from './Logo';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

interface NavbarProps {}

export interface NavbarComponent extends React.FC<NavbarProps> {
  Link: typeof Link;
  Logo: typeof Logo;
  Menu: typeof Menu;
  MenuItem: typeof MenuItem;
  MenuButton: typeof MenuButton;
}

export const Navbar: NavbarComponent = () => {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

Navbar.Link = Link;
Navbar.Logo = Logo;
Navbar.Menu = Menu;
Navbar.MenuItem = MenuItem;
Navbar.MenuButton = MenuButton;

export default Navbar;
