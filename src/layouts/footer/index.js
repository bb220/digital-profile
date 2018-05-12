import React from 'react'
import Link from 'gatsby-link'
import css from './style.module.scss'
import linkedIn from './linkedin.png'
import email from './email.png'
import gh from './gh.png'

export default function Footer ({ data }) {
  return (
    <footer className={css.footer}>
      <div className={css.link_container}>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
      </div>
      <div className={css.line}></div>
      <div className={css.contact_container}>
        <div className={css.phrase}>
          <p>Let's collaborate.</p>
        </div>
        <a href={data.linkedInUrl}>
          <img src={linkedIn} />
        </a>
        <a href={`mailto:${data.email}`}>
          <img className={css.email} src={email} />
        </a>
        <a href={data.github}>
          <img src={gh} />
        </a>
      </div>
    </footer>
  )
}
