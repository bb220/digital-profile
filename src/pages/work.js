import React from 'react'
import Link from 'gatsby-link'
import css from './style.module.scss'

export default () =>
<div>
  <h2>Product Engineering</h2>
  <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <div className={css.link_container}>
      <Link to='/about'>About</Link>
    </div>
</div>
