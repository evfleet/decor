import React from 'react';
import { Menu } from '@headlessui/react';

interface NavMenuProps {
  children: React.ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  return <Menu>{children}</Menu>;
};

export default NavMenu;
