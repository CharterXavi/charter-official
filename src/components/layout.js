/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "./layout.css"

// import Chatbot from './chatbot/chatbot';
import Footer from "./footer/footer"
import Header from "./header/header"
import PropTypes from "prop-types"
import React from "react"

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
      <main>
        {children}
        {/* <Chatbot /> */}
      </main>
      <Footer />
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
