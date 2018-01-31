import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="Konrad Jarosinski - Front-end/UX Developer"
      meta={[
        { name: 'description', content: 'Konrad Jarosinski - Front-end/UX Developer' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
