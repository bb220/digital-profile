import React from 'react'
import css from './style.module.scss'
import Footer from './footer/component'
import Link from 'gatsby-link'
import logo from './logo.svg'

export default ({ children, location }) => {
  const subtitle = (location.pathname).substring(1)
  return (
    <div className={css.app_container}>
      <div className={css.top}>
        <Link to='/'>
          <object className={css.object} type='image/svg+xml' data={logo}></object>
        </Link>
        <h3 className={css.subtitle}>{subtitle}</h3>
      </div>
      <div className={css.bottom}>
        <div className={css.content_container}>
          {children()}
        </div>
      </div>
      <Footer />
    </div>
  )
}
