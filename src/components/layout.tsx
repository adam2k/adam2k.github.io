/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./styles/styles.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          subTitle
        }
      }
    }
  `);
  const {
    title,
    subTitle,
  } = data.site.siteMetadata;

  const [isCrazy, setIsCrazy] = useState(false);

  function handleCrazy() {
    setIsCrazy(isCrazy ? false : true);
  }

  return (
    <div className={isCrazy ? "layout get-crazy" : "layout"}>
      <Header title={title} subTitle={subTitle} />
      <div className="content-area">
        <main>{children}</main>
        <Footer isCrazy={isCrazy} onClick={handleCrazy} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
