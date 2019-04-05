import React from 'react';
import { A } from 'hookrouter';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { LocationSearch } from './LocationSearch';

const NavStyle = {
  marginTop: '2%',
  marginBottom: '2%'
}

export const Nav = props => {
  const { zipcode, active } = props;

  const pages = [
    {
      label: 'Today',
      href: 'today'
    },
    {
      label: 'Hourly',
      href: 'hourly'
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={NavStyle}>
      <A className="navbar-brand" href={`/zip/${zipcode}/today`}><Logo /></A>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {pages.map(page => {
            return (
              <NavLink
                key={page.href}
                zipcode={zipcode}
                label={page.label}
                href={page.href}
                active={active}
              />
            )
          })}
        </ul>
        <span className="navbar-text">
          <LocationSearch />
        </span>
      </div>
    </nav>
  )
}