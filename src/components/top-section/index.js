import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import NavBar from '../navbar'
import cx from 'classnames'

export default ({ subtitle, className, logo }) => {
  return (
    <div>
    <div className={cx({
        [css.logo]: true,
        [className]: true
      })}>
      <NavBar className={css.link_color} />
      <Link to='/'>
        <object className={css.object} type='image/svg+xml' data={logo}></object>
      </Link>
    </div>
    <div className={cx({
        [css.top]: true,
        [className]: true
      })}>
      <h3 className={css.subtitle}>{subtitle}</h3>
    </div>
    </div>
  )
}
