/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import LogoMorph from "./logo_morph";
import Logo from "./logo";
import "./header.css"

function Header(props) {
  let logo = props.home ? <Logo title={props.title}/> : <LogoMorph title={props.title}/>;
  let cssClassName = 'header';

  if (props.home) {
    cssClassName += ' header--home'
  } else {
    cssClassName += ' header--standard'
  }

  return (
    <header className={cssClassName}><div className='header__content'>{logo}</div></header>
  )    
}

export default Header;
