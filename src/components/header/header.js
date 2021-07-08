import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './header.style.css'
import logo from "../../images/sosnowiankaLogo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container header-container">
      <Link to="/">
        <div className="header-name-section">

          <img src={logo} alt="" />

          <div className="site-name">
            <h1>{siteTitle}</h1>
            <h2>Stanisław Dolny</h2>
          </div>
        </div>
      </Link>

      <div className="navigation">

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
