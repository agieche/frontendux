---
title: Getting started with gatsby
date: "2019-05-22T22:12:03.284Z"
description: How to install gatsby locally
---

I wanted to start a blog about frontend related topics a long time ago. Due to the inspiration
at Google I/O 19, I started to setup my blog this evening. Since I read a lot of good feedback about it, I 
wanted to build this blog a static site generator called [gatsby.js](https://www.gatsbyjs.org/).

I went for it, since it is

- easy to setup
- easy to reason about, since it supports markdown as content input
- documented very well
- praised on twitter and on other blogs.

I found several great introductions on how to setup a gatsby blog, e.g. [here](https://daveceddia.com/start-blog-gatsby-netlify/).

## How to run gatsby locally

1. Install CLI
```shell
npm install -g gatsby-cli
```

2. Create a new site from the gatsby blog template
```shell
gatsby new my-frontend-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

or alternatively create a blank new site

```shell
gatsby new my_site_name
```

3. Start developing
```shell
cd my-frontend-blog
gatsby develop
```

4. Open browser
The dev server is running under:
```
http://localhost:8000/
```

5. Modify your content - create a blog article
You write plain markdown. Your content is editable under `./content/hello-world`. You can add new directories with an index.md file to add a new article to your blog.


5. Simulate a build for production
Since gatsby is a static site generator, all of your code and content is translated into static html, js and css, which can be served even on simple hosting providers. If you want to trigger a build for production, you run:

```shell
gatsby build
````

