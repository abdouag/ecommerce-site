import React from 'react';
import logo from '/Users/macbookpro/ecommerce-site/src/assets/Ag-Digital.png';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <header>
          <img src={logo} alt="Logo AG Digital" className="logo" />
          <nav>
              <ul>
                  <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
                  <li><NavLink to="/produits" activeClassName="active">Produits</NavLink></li>
                  <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              </ul>
              <input type="text" placeholder="Rechercher..."/>
          </nav>
      </header>
  );
}

export default Header;
