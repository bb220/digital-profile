import React from 'react'
import css from './style.module.scss'
import Footer from './footer/component'

export default ({ children }) =>
<div>
  <div className={css.top}>
    <h1>B</h1>
    <h3 className={css.title}>Title</h3>
  </div>
  <div className={css.bottom}>
    <div className={css.content_container}>
      {children()}
      <Footer />
    </div>
  </div>
</div>
