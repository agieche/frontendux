import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Logo from "./logo"
import "./layout.css"
import "./header.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
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
          <Logo title={title}/>
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
          <Logo title={title}/>
        </Link>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `0 ${rhythm(3 / 4)}`,
          maxWidth: rhythm(32)
        }}
      >
        <header className='header'>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
