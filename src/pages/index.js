import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
// TODO(bb220): use only one svg file
import logoLarge from './logo-large.svg'

export default ({ data }) => {
  const {
    subtitle,
    tagline
  } = data.homeJson

  return (
    <div>
      <Helmet>
        <title>Brandon Bellero</title>
        <meta name='description' content='At the intersection of Technology, Business, and Human Experience' />
        <meta name="google" content="nositelinkssearchbox" />
      </Helmet>
      <TopSection className={css.home_color} logo={logoLarge}/>
      <div className={css.content}>
        <h2>{subtitle}</h2>
        <p>{tagline}</p>
        <div className={css.link_container}>
          <Link to='/about'>About</Link>
          <Link to='/work'>Work</Link>
        </div>
      </div>
  </div>
  )
}

export const query = graphql `
query contentQuery {
  homeJson {
    subtitle
    tagline
  }
}
`
