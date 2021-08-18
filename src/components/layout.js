/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
  site {
    siteMetadata {
      title
      subtitle
    }
  }
}
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteSubTitle={data.site.siteMetadata.subtitle} />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
