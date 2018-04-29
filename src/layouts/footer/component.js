import React from 'react'
import css from './style.module.scss'
import linkedIn from './linkedin.png'
import email from './email.png'
import gh from './gh.png'

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.phrase}>
        <p>Let's collaborate.</p>
      </div>
      <img src={linkedIn} />
      <img className={css.email} src={email} />
      <img src={gh} />
    </footer>
  )
}
