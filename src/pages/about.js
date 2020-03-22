import React from 'react'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import cx from 'classnames'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

export default ({ location }) => {
  return (
    <StaticQuery
      query={
        graphql`
          query aboutQuery {
            aboutJson {
              page
              para1
              heading
            }
          }
        `}
      render={data => {
        const styleProps = {
          linkColor: css.default_link,
          backColor: css.blue
        }
        return (
        <Layout location={location} styleProps={styleProps}>
          <div>
            <Helmet>
              <title>Brandon Bellero | About</title>
            </Helmet>
            <TopSection subtitle={data.aboutJson.page} className={css.about_color} />
            <div className={cx(css.content, css.about_bottom)}>
              <h2>{data.aboutJson.heading}</h2>
              <p>{data.aboutJson.para1}</p>
            </div>
          </div>
        </Layout>);
      }}
    />
  )
}