import React from 'react'
import css from './style.module.scss'
import Footer from './footer/component'

export default ({ children }) =>
  <div className={css.layout}>
    {children()}
    <Footer />
  </div>
