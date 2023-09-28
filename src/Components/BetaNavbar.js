import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../Styles/BetaNavbar.css";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import imageSrcMobile from "/Users/harshsahcdeva/Desktop/arrow-main 9.04.06 PM/src/assets/6.png";

const BetaNavbar = ({ handleBackToNormalClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Use navigate function to programmatically navigate
    navigate('/Vault'); // Direct to the Vault.js page when the component mounts

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navigate]); // Include navigate as a dependency to avoid linting warnings

  const handleImageClick = () => {
    // Redirect to NormalNavbar and Clicklogo.js when imageSrcMobile is clicked
    handleBackToNormalClick();
    navigate('/Clicklogo');
  };

  return (
    <div className={`mobile-menu-container ${isMobile ? 'menu-open' : ''}`}>
      <nav className="header">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <div className="leftalign">
            <li>
              <NavLink to="/Clicklogo" className="navbar-link" onClick={handleImageClick}>
                <img src={imageSrcMobile} className="image11" alt="Logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Vault" className="navbar-link">
                VAULT
              </NavLink>
            </li>
            <li>
              <NavLink to="/Trading" className="navbar-link">
                TRADING
              </NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio" className="navbar-link">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/Trading" className="navbar-link">
                V2 PREVIEW
              </NavLink>
            </li>
          </div>
          <div className="rightalign">
            <div className="buttons">
              <button className="buttonsize">
                CONNECT WALLET
              </button>
              <div className="circle-iconn">
                <AiOutlineBell className="icons" />
              </div>
              <div className="circle-iconn">
                <BiAlignRight className="icons" />
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default BetaNavbar;
