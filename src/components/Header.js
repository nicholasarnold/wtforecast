import React from 'react';
import { Nav } from './Nav';

export const Header = props => {
  const { zipcode, active } = props;
  return (
    <header>
      <Nav zipcode={zipcode} active={active} />
    </header>
  )
}