import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import { isAbsolute } from "path";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: `var(--color-link)`,
    },
    "a:hover": {
      color: `var(--color-link-hover)`,
    },
    "h1, h2, h3, h4, h5, h6, p": {
      marginTop: `0`
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
