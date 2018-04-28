import React from 'react'
import css from './style.module.scss'
import Footer from './footer/component'
import Link from 'gatsby-link'

export default ({ children }) =>
<div className={css.app_container}>
  <div className={css.top}>
    <h1><Link to='/'>B</Link></h1>
    <h3 className={css.title}>Title</h3>
  </div>
  <div className={css.bottom}>
    <div className={css.content_container}>
      {children()}
      <Footer />
    </div>
  </div>
</div>
