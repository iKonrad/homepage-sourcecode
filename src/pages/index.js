import React from 'react'
import Link from 'gatsby-link'
import Console from './../components/Console';

const IndexPage = () => (
  <div className="page">
    <h1 className="title">{`{ konrad jarosinski }`}</h1>
    <p className="text-muted subtitle">Front-end/UX Developer</p>
    <Console/>
  </div>
)

export default IndexPage
