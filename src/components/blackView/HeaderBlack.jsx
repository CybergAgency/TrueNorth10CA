import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png';
import menu from './images/free-icon-menu-4254068.png';

function HeaderBlack() {
  const location = useLocation();
  const path = window.location.pathname; 
  const firstSegment = path.split('/')[1]; // İlk segmenti alıyoruz (örneğin 'ch', 'ca', 'nz')

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLink = (route) => {
    // Eğer path'te bir ilk segment varsa, bunu linklere ekle
    if (firstSegment) {
      return `/${firstSegment}${route}`;
    }
    return route; // Eğer ilk segment yoksa, standart route'u döndür
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div
        style={{
          borderRadius: '24px',
          border: '#0f0d1b',
          borderWidth: '2px',
          borderStyle: 'solid',
        }}
        className="container"
      >
        <Link className="navbar-brand" to={firstSegment ? `/${firstSegment}` : "/"} >
          <img src={logo} alt="logo" /> <span>TrueNorth10CA </span>
        </Link>
        <button className="navbar-toggler" type="button" id="burgerMenuButton">
          <img id="burgerIcon" src={menu} alt="menu" onClick={toggleMenu} style={menuOpen ? { filter: "invert(100%)" } : {}} />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to={getLink('/')}>
              Top Online Casino
            </Link>
            <Link className="nav-item nav-link" to={getLink('/slot-machines')}>
              Slot Machines
            </Link>
            <Link className="nav-item nav-link" to={getLink('/roulette')}>
              Roulette
            </Link>
            <Link className="nav-item nav-link" to={getLink('/poker')}>
              Poker
            </Link>
            <Link className="nav-item nav-link" to={getLink('/live-casino')}>
              Live Casino
            </Link>
            <Link className="nav-item nav-link" to={getLink('/blackjack')}>
              Blackjack
            </Link>
          </div>
        </div>
        <div id="mobileMenu" className={`mobile-menu ${menuOpen && 'show'}`}>
          <div className="navbar-nav white-links flex-column">
            <Link className="nav-item nav-link" to={getLink('/')}>
              Top Online Casino
            </Link>
            <Link className="nav-item nav-link" to={getLink('/slot-machines')}>
              Slot Machines
            </Link>
            <Link className="nav-item nav-link" to={getLink('/roulette')}>
              Roulette
            </Link>
            <Link className="nav-item nav-link" to={getLink('/poker')}>
              Poker
            </Link>
            <Link className="nav-item nav-link" to={getLink('/live-casino')}>
              Live Casino
            </Link>
            <Link className="nav-item nav-link" to={getLink('/blackjack')}>
              Blackjack
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBlack;
