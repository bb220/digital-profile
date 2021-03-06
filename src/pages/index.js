import React from 'react'
import css from './style.module.scss'
import Helmet from 'react-helmet'
import favicon from './favicon.png'
import cx from 'classnames'
import Layout from '../components/layout'
import linkedIn from './linkedin.png'
import email from './email.png'
import gh from './gh.png'
import { StaticQuery, graphql } from 'gatsby'

export default ({ location }) => {
  return (
    <StaticQuery
      query={
        graphql`
          query homeQuery {
            homeJson {
              name
              tagline
              linkedInUrl
              email
              github
            }
          }
        `}
      render={data => (
        <Layout 
          location={location}
          styleProps={{ linkColor: css.home_link }}
        >
          <div>
            <Helmet>
              <title>Brandon Bellero | At the intersection of technology, business, and design.</title>
              <link rel='icon' type='image/png' href={favicon} />
              <meta name='description' content='At the intersection of technology, business, and design.' />
              <meta name='google' content='nositelinkssearchbox' />
            </Helmet>
            <div className={css.home_logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="180 0 600 600"><path d="M182 140.2c20-3.5 60-7 98.5-7 46.5 0 75 4.5 100 19 23.5 12.5 40 35.5 40 66.5 0 29.5-17.5 57-55.5 71.5v1c38.5 10 67 39.5 67 82.5 0 31-14 55-35 72-24.5 19.5-65.5 30.5-132.5 30.5-37.5 0-65.5-2.5-82.5-5v-331zm75.5 129h25c40.5 0 61.5-16.5 61.5-41.5 0-25.5-19.5-39-54-39-17 0-26.5 1-32.5 2v78.5zm0 149.5c7.5 1 16.5 1 29.5 1 34.5 0 65-13.5 65-49 0-33.5-30.5-47-68.5-47h-26v95z" /></svg>
            </div>
            <div className={cx(css.content, css.center)}>
              <h1 className={css.name}>{data.homeJson.name}</h1>
              <p className={css.tagline}>{data.homeJson.tagline}</p>
              <div className={css.link_container}>
                <a href={data.homeJson.linkedInUrl}>
                  <img className={css.linked} src={linkedIn} alt='linked-in' />
                </a>
                <a href={`mailto:${data.homeJson.email}`}>
                  <img className={css.email} src={email} alt='email' />
                </a>
                <a href={data.homeJson.github}>
                  <img src={gh} alt='github' />
                </a>
              </div>
            </div>
          </div>
        </Layout>
      )}
    />
  )
}