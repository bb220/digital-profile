import React from 'react'
import css from './style.module.scss'
import linkedIn from './linkedin.png'
import email from './email.png'
import gh from './gh.png'

export default function Footer ({ data }) {
  return (
    <footer className={css.footer}>
      <div className={css.line}></div>
      <div className={css.contact_container}>
        <a href={data.linkedInUrl}>
          <img className={css.linked} src={linkedIn} alt='linked-in'/>
        </a>
        <a href={`mailto:${data.email}`}>
          <img className={css.email} src={email} alt='email' />
        </a>
        <a href={data.github}>
          <img src={gh} alt='github' />
        </a>
      </div>
    </footer>
  )
}
