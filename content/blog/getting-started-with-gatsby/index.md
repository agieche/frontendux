---
title: Starting your own dev blog with gatsby
date: "2019-05-22T22:12:03.284Z"
description: Follow my short journey on starting a development blog with gatsby.
---

I wanted to start a blog about frontend related topics a long time ago. Due to the inspiration
at [Google I/O 19](https://events.google.com/io/), I started to setup my blog this evening. Since I read a lot of good feedback about it, I 
wanted to build this blog a static site generator called [gatsby.js](https://www.gatsbyjs.org/).

## Gatsby FTW

I decided to give **gatsby** a spin, since it is

- easy to setup
- easy to reason about, since it supports markdown as content input
- documented very well
- praised among developers for its ease and joy of use.

I found several great introductions on how to [setup a gatsby blog](https://daveceddia.com/start-blog-gatsby-netlify/) in general, but since developers also need some plugins for code highlighting, I decided to write my own setup article.

## How to run gatsby locally

**Prerequisites**
- Text Editor
- Web Browser
- Node + NPM or Yarn

**Install CLI**
```shell
npm install -g gatsby-cli
```

**Create a new site from the gatsby blog template**
```shell
gatsby new my-frontend-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

or alternatively create a blank new site

```shell
gatsby new my_site_name
```

**Start developing**

```shell
cd my-frontend-blog
gatsby develop
```

**Open browser to access dev server**

```
http://localhost:8000/
```

**Simulate a build for production**

Since gatsby is a static site generator, all of your code and content is translated into static html, js and css, which can be served even on simple hosting providers. If you want to trigger a build for production, you run:

```shell
gatsby build
````
After the build is finished, the `./public` directory should be populated with your updated blog site including all html, images, js and css.

## Write your content with Markdown

You can write plain markdown in your articles. Your content is editable under `./content/hello-world`. You can add new directories with an index.md file to add a new article to your blog.

If you\'re not familiar with Markdown yet, have a look at the [Markdown GitHub Guide](https://guides.github.com/features/mastering-markdown/).

## Adjust styling

The default layout, that is provided from the starter teomplate is clean, but you definitely want to give it a little twist to make your blog stand our a little. To add a globally available style, you may add a layout.css file.

`src/components/layout.css`
```css
/* My custom global styles */
ul, ol {
  margin-left: 0;
  list-style-position: inside;
}
```

Then, include the layout.css within your layout component.

`src/components/layout.js`
```js
import React from "react"
import { Link } from "gatsby"
import "./layout.css"

class Layout extends React.Component {
    // snipped for brevity
}
```

Finished! Now, your global styling should be included by your layout component. Since the layout component is present on every route, the style is loaded everywhere. Lets proceed to plugins.

## Code Highlighting with Gatsby Plugins
https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
https://using-remark.gatsbyjs.org/code-and-syntax-highlighting/#code-blocks
To make code examples easier to grasp, syntax highlighting is a nice addition when using a `<pre>`.

Install gatsby-remark-prismjs

```shell
npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

Adjust your gatsby-config.js
```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            // Class prefix for <pre> tags containing syntax highlighting;
            // defaults to 'language-' (eg <pre class="language-js">).
            // If your site loads Prism into the browser at runtime,
            // (eg for use with libraries like react-live),
            // you may use this to prevent Prism from re-processing syntax.
            // This is an uncommon use-case though;
            // If you're unsure, it's best to use the default value.
            classPrefix: "language-",
            // This is used to allow setting a language for inline code
            // (i.e. single backticks) by creating a separator.
            // This separator is a string and will do no white-space
            // stripping.
            // A suggested value for English speakers is the non-ascii
            // character '›'.
            inlineCodeMarker: null,
            // This lets you set up language aliases.  For example,
            // setting this to '{ sh: "bash" }' will let you use
            // the language "sh" which will highlight using the
            // bash highlighter.
            aliases: {},
            // This toggles the display of line numbers globally alongside the code.
            // To use it, add the following line in src/layouts/index.js
            // right after importing the prism color scheme:
            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
            // Defaults to false.
            // If you wish to only show line numbers on certain code blocks,
            // leave false and use the {numberLines: true} syntax below
            showLineNumbers: false,
            // If setting this to true, the parser won't handle and highlight inline
            // code used in markdown i.e. single backtick code like `this`.
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
]
```

Picking a theme (available here: https://github.com/PrismJS/prism/tree/master/themes)
```js
// gatsby-browser.js
require("prismjs/themes/prism-tomorrow.css");
```

## Comments for your articles with Tool X

TBD

## Adding google analytics tracking to your blog

TBD


