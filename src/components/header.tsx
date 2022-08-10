import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = ({ title, subTitle }) => (
  <header>
    <div className="header-grid">
      <div className="header-img">
        <Image/>
      </div>
      <div className="header-titles">
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </h1>
        <h2>
          {subTitle}
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
