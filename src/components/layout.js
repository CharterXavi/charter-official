/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      > */}
      {/* Use a div to push the rest of the content down to line up after the navbar, since it's fixed */}
      <div className='spacer'></div>
        <main>{children}</main>
      <Footer />
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
