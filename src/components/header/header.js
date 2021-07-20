import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './header.style.css'
import logo from "../../images/sosnowiankaLogo.png"
import MobileMenu from "../mobile-menu/mobileMenu"

const Header = ({ siteTitle, siteSubTitle }) => (
  <header>
    <div className="container header-container">
      <Link to="/">
        <div className="header-name-section">

          <img src={logo} alt="" />

          <div className="site-name">
            <h1>{siteTitle}</h1>
            <h2>{siteSubTitle}</h2>
          </div>
        </div>
      </Link>
      {/* <div className="hamburger"><input type="checkbox" id="hamburger" /><label for="hamburger"><i class="fas fa-bars"></i></label></div> */}
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
                <Link to="/">Żaki</Link>
              </div>
            </li>
            <li className="navigation-link">
              <Link to="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>


    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
