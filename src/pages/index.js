import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
// TODO(bb220): use only one svg file
import logoLarge from './logo-large.svg'

export default ({ data }) => {
  const {
    name,
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
        <h1 className={css.name}>{name}</h1>
        <p className={css.tagline}>{tagline}</p>
      </div>
  </div>
  )
}

export const query = graphql `
query homeQuery {
  homeJson {
    name
    tagline
  }
}
`
