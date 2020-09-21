import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Thomas Grundy</h1>
    <div style={{
      maxWidth: `100px`,
      marginTop: `1.45rem`,
      marginBottom: `1.45rem`,
      borderRadius: '999px',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Image />
    </div>
    <div style={{marginTop: `1.45rem`, marginBottom: `1.45rem`}}>
      <Link to="https://www.linkedin.com/in/thomasgrundy91/">My LinkedIn</Link>
    </div>
    <div>
      <Link to="https://docs.google.com/document/d/1zPNQKl4ufKK3pLtDHSNWpFL0FICMer6z-wqDxi_jeZc/edit?usp=sharing">My Resume</Link>
    </div>
  </Layout>
)

export default IndexPage
