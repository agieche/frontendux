import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Logo from "./logo"
import "./layout.css"
import "./header.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, invertLogo } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <Logo title={title} invertLogo={invertLogo}/>
          <h1 className='screenreader'>{title}</h1>
        </Link>
      )
    } else {
      header = (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <Logo title={title} invertLogo={invertLogo}/>
        </Link>
      )
    }
    return (
      <div className='content'>
        <header className='header'><div className='header__content'>{header}</div></header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
