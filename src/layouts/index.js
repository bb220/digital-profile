import React from 'react'
import css from './style.module.scss'
import Footer from './footer/component'
import Link from 'gatsby-link'

export default ({ children, location }) => {
  const subtitle = (location.pathname).substring(1)
  return (
    <div className={css.app_container}>
      <div className={css.top}>
        <h1><Link to='/'>B</Link></h1>
        <h3 className={css.subtitle}>{subtitle}</h3>
      </div>
      <div className={css.bottom}>
        <div className={css.content_container}>
          {children()}
          <Footer />
        </div>
      </div>
    </div>
  )
}
