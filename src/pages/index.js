import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'

export default () =>
  <div>
    <Helmet>
      <title>Brandon Bellero</title>
      <meta name='description' content='At the intersection of Technology, Business, and Human Experience' />
      <meta name="google" content="nositelinkssearchbox" />
    </Helmet>
    <TopSection className={css.home_color} />
    <div className={css.content}>
      <h2>B</h2>
      <p>At the intersection of Technology, Business, and Human Experience</p>
      <div className={css.link_container}>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
      </div>
    </div>
</div>
