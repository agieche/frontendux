/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import LogoImage from "../../content/assets/logo_2.svg";

function Logo(props) {


  return (
    <div className={`header__logo logo ${ props.invertLogo ? 'logo--inverted' : ''}`}>
      <LogoImage />
    </div>
  )
}

export default Logo
