import React from 'react'
import css from './style.module.scss'
import Footer from './footer'

export default ({ children, location }) => {
  const subtitle = (location.pathname).substring(1)
  return (
    <div className={css.app_container}>
      <div className={css.bottom}>
        {children()}
      </div>
      <Footer />
    </div>
  )
}
