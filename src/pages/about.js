import React from 'react'
import Link from 'gatsby-link'
import css from './style.module.scss'

export default () =>
  <div>
    <h2>Lorem Ipsum</h2>
    <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className={css.link_container}>
      <Link to='/work'>Work</Link>
    </div>
</div>
