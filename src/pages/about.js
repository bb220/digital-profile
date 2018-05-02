import React from 'react'
import Link from 'gatsby-link'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import logo from './logo.svg'

export default ({ data }) => {
  const {
    page,
    description
  } = data.aboutJson

  return (
    <div>
      <Helmet>
        <title>Brandon Bellero | About</title>
      </Helmet>
      <TopSection subtitle={page} className={css.about_color} logo={logo} />
      <div className={css.content}>
        <h2>Lorem Ipsum</h2>
        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={css.link_container}>
          <Link to='/work'>Work</Link>
        </div>
      </div>
  </div>
  )
}

export const query = graphql `
query aboutQuery {
  aboutJson {
    page
    description
  }
}
`
