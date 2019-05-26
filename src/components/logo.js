/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Logo(props) {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <Image
              fixed={data.logo.childImageSharp.fixed}
              style={{
              }}
              imgStyle={{
              }}
              alt={props.title}
          />
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Logo
