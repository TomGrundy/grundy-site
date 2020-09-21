import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '26px',
          margin: '0',
          backgroundColor: '#262626',
          alignItems: 'center',
          minHeight: '100%',
          textAlign: 'center',
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
