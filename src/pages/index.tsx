import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="adam2k.com" description="My personal website" />
    <div className="description">
      <p>
        Hello, I am a software engineer from Virginia. I work with a wide range 
        of technologies from scheduling &amp; orchestration tool
        &nbsp;
        <a href="https://kubernetes.io/" target="_blank">
          Kubernetes (K8s)
        </a>
        &nbsp;to frontend frameworks&nbsp;
        <a href="https://reactjs.org/" target="_blank">React</a>
        &nbsp;&amp;&nbsp;
        <a href="https://vuejs.org/" target="_blank">
          Vue.js
        </a>.
      </p>
      <p>
        I am a musician, public speaker, collaborator and creative. I am driven to create
        innovative, inclusive software solutions that help improve lives.
      </p>
      <p>Interested in talking? Send me a message and we can chat.</p>
      <p>You can find me all around the Interwebs or biking and running around Norfolk.</p>
      <p>
        <a href="/static/Adam Vandover Resume.pdf">
        Check out my Resume
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
