import React from 'react'
import css from './style.module.scss'
import { Link } from 'gatsby'
import cx from 'classnames'

export default ({ className }) => {
  return (
    <div className={cx(css.link_container, className)}>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
    </div>
  )
}
