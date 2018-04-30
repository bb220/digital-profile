import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import logo from './logo.svg'
import cx from 'classnames'

export default ({ subtitle, className }) => {
  return (
    <div className={cx({
        [css.top]: true,
        [className]: true
      })}>
      <Link to='/'>
        <object className={css.object} type='image/svg+xml' data={logo}></object>
      </Link>
      <h3 className={css.subtitle}>{subtitle}</h3>
    </div>
  )
}
