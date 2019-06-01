import React from "react"
import Header from './header';
import "./layout.css"

class Layout extends React.Component {

  render() {
    const { location, title, children, invertLogo } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className='content'>
        <Header home={location.pathname === rootPath} title={title} />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
