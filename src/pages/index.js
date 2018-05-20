import React from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import TopSection from '../components/top-section'
import NavLinks from '../components/nav-links'
import Helmet from 'react-helmet'
// TODO(bb220): use only one svg file
import logoLarge from './logo-large.svg'
import favicon from './favicon.png'
import cx from 'classnames'

export default ({ data }) => {
  const {
    name,
    tagline
  } = data.homeJson

  return (
    <div>
      <Helmet>
      <title>Brandon Bellero | At the intersection of Technology, Business, and Human Experience</title>
        <link rel='icon' type='image/png' href={favicon} />
        <meta name='description' content='At the intersection of Technology, Business, and Human Experience' />
        <meta name='google' content='nositelinkssearchbox' />
      </Helmet>
      <div className={css.home_logo}>
        <Link to='/'>
          <object className={cx(css.object, css.large)} type='image/svg+xml' data={logoLarge}></object>
        </Link>
      </div>
      <div className={css.content}>
        <h1 className={css.name}>{name}</h1>
        <p className={css.tagline}>{tagline}</p>
        <NavLinks className={css.link_color}/>
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
