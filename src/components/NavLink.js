import React from 'react';
import { A } from 'hookrouter';

export const NavLink = props => {
  const { zipcode, label, href, active } = props;
  if (href === active) {
    return (
      <li className="nav-item active">
        <A href={`/zip/${zipcode}/${href}`} className="nav-link">{label}</A>
      </li>
    )
  } else {
    return (
      <li className="nav-item">
        <A href={`/zip/${zipcode}/${href}`} className="nav-link">{label}</A>
      </li>
    )
  }
}