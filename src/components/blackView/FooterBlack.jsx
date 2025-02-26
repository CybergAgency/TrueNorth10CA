import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import logo from './images/logo.png'; 
import raigLogo from './images/footer-img/2.RAIG_FooterLogos_UK.20230714081542.svg';
import gamstopLogo from './images/footer-img/3.GAMSTOP_FooterLogos_UK.20230714081600.svg';
import gamecareLogo from './images/footer-img/4.GameCare_FooterLogos_UK.20230714081627.svg';
import begambleLogo from './images/footer-img/5.BeGambleAware_FooterLogos_UK.20230714081641.svg';
import gamblingTherapyLogo from './images/footer-img/6.GamblingTherapy_FooterLogos_UK.20230714081659.svg';
import eighteenPlusLogo from './images/18+.png';

function FooterBlack() {
  const location = useLocation(); // Hook to get the current location

  // Check if the current path contains "/fi"
  const isAU = location.pathname.includes('/fi');

  return (
    <section className="end">
      <div className="container">
        <div style={{ marginBottom: '16px', paddingBottom: '16px' }} className="d-flex justify-content-between res-foot">
          <div className="wrapper-footer-img" style={{ marginRight: '20px' }}>
            <Link className="navbar-brand" to={isAU ? "/fi" : "/"}>
              <img src={logo} alt="logo" /> <span>TrueNorth10CA </span>
            </Link>
            <div className="footer-img">
              <img src={raigLogo} alt="RAIG Logo" />
              <img src={gamstopLogo} alt="Gamstop Logo" />
              <img src={gamecareLogo} alt="GameCare Logo" />
              <img src={begambleLogo} alt="BeGambleAware Logo" />
              <img src={gamblingTherapyLogo} alt="Gambling Therapy Logo" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <img style={{ width: '32px' }} src={eighteenPlusLogo} alt="18+" />
            <span style={{ fontSize: 'small', marginTop: '10px' }}>
              TrueNorth10CA  publishes online casino reviews and is not responsible for any actions or consequences
              associated with the use of third-party sites. All information is provided for informational purposes only,
              please check the terms and conditions of each casino directly on their platforms.
            </span>
          </div>
        </div>

        <hr style={{ border: '0.5px solid gray', margin: '20px 0' }} />

        <div className="row d-flex justify-content-between">
          <div className="col-md-6 d-flex justify-content-start">
            <p className="cw">© All rights reserved 2024</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <p className="cw">
              <Link to={isAU ? "/fi/privacy-policy" : "/privacy-policy"}>Privacy policy</Link>
            </p>
            <p className="cw ml-3">
              <Link to={isAU ? "/fi/terms-and-conditions" : "/terms-and-conditions"}>Terms and conditions</Link>
            </p>
            <p className="cw ml-3">
              <Link to={isAU ? "/fi/cookie-policy" : "/cookie-policy"}>Cookie policy</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBlack;
