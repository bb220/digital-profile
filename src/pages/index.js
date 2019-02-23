import React from 'react'
import css from './style.module.scss'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
// TODO(bb220): use only one svg file
import logoLarge from './logo-large.svg'
import favicon from './favicon.png'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={
        graphql`
          query homeQuery {
            homeJson {
              name
              tagline
            }
          }
        `}
      render={data => (
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
          <div className={cx(css.content, css.center)}>
            <h1 className={css.name}>{data.homeJson.name}</h1>
            <p className={css.tagline}>{data.homeJson.tagline}</p>
          </div>
        </div>
      )}
    />
  )
}