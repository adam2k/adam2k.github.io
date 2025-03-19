import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="adam2k.com" description="My personal website" />
    <div className="description">
      <p>
        Hello, I am a software engineering manager from Virginia. I work with a
        wide range of technologies from&nbsp;
        <a href="https://www.java.com" target="_blank">
          java
        </a>
        ,&nbsp;
        <a href="https://golang.org" target="_blank">
          go lang
        </a>
        , &nbsp;
        <a href="https://www.cplusplus.com/" target="_blank">
          C++
        </a>
        , &nbsp;
        <a href="https://www.typescriptlang.org" target="_blank">
          typescript
        </a>
        &nbsp;&amp;&nbsp;
        <a href="https://nodejs.org/" target="_blank">
          node.js
        </a>
        .
      </p>
      <p>
        I am a dad, husband, runner, musician, public speaker, collaborator and
        creative. I am driven to create innovative, inclusive software solutions
        that help improve lives.
      </p>
      <p>Interested in talking? Send me a message and we can chat.</p>
      <p>
        You can find me all around the Interwebs or biking and running around
        Norfolk.
      </p>
    </div>
  </Layout>
)

export default IndexPage
