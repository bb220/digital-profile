import React from 'react'
import css from './style.module.scss'

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.phrase}>
        <p>Let's collaborate.</p>
      </div>
      <div className={css.icon}></div>
      <div className={css.icon}></div>
      <div className={css.icon}></div>
    </footer>
  )
}
