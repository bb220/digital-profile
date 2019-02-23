import React from 'react'
import css from './style.module.scss'
import { Link } from 'gatsby'
import cx from 'classnames'
import logo from './logo.svg'
import NavLinks from '../nav-links'

export default ({ className }) => {
  return (
    <div className={cx(css.nav_container, className)}>
      <div className={cx({
          [css.logo]: true
        })}>
        <Link to='/'>
          <object className={css.object} type='image/svg+xml' data={logo}></object>
        </Link>
      </div>
      <NavLinks />
    </div>
  )
}
