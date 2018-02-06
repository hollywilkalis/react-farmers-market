import React from "react";
import MarketList from "./MarketList";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';

function Nav(props){
  const navContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }

  const navStyles = {
    fontFamily: 'sans-serif',
    listStyle: 'none',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
  const navItemStyles = {
    display: 'inline',
    marginRight: 20,
    marginLeft: 20,
    fontSize: 25,
    textDecoration: 'none'
  }

  return (
    <div style={navContainerStyles}>
      <ul style={navStyles}>
        <li style={navItemStyles}><Link to="/marketlist" style={{ textDecoration: 'none' }}>Markets</Link></li>
        <li style={navItemStyles}><Link to="/productlist" style={{ textDecoration: 'none' }}>Products</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
