import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './header.style.css'
import logo from "../../images/sosnowiankaLogo.png"
import mobileLogo from "../../images/sosnowiankaLogoMobile.png"
import MobileMenu from "../mobile-menu/mobileMenu"
import styled from "styled-components"

const MobileLogo = styled.img`
    display: none;
    @media (max-width: 991.98px) {
      display: block;
    }
  `

const Header = ({ siteTitle, siteSubTitle }) => {


  return (
    <header>
      <div className="container header-container">
        <Link to="/">
          <div className="header-name-section">

            <img className="header-logo-lg" src={logo} alt="" />
            <MobileLogo src={mobileLogo} />
            <div className="site-name">
              <h1>{siteTitle}</h1>
              <h2>{siteSubTitle}</h2>
            </div>
          </div>
        </Link>
        <MobileMenu className="mobile-menu"></MobileMenu>
        <div className="navigation">
          <div className="social-icons">
            <Link to="#"><i className="fab fa-twitter-square"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-facebook-square"></i></Link>
          </div>

          <nav>
            <ul>
              <li className="navigation-link">
                <Link to="/">Strona Główna</Link>
              </li>
              <li className="navigation-link dropdown">
                <button className="navigation-button"><Link to="/">Drużyny <i className="fas fa-chevron-down"></i></Link></button>
                <div className="dropdown-list">
                  <Link to="/seniorzy">Seniorzy</Link>
                  <Link to="/orliki">Orliki</Link>
                  <Link to="/zaki">Żaki</Link>
                </div>
              </li>
              <li className="navigation-link">
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>


      </div>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
