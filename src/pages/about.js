import React from 'react'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={
        graphql`
          query aboutQuery {
            aboutJson {
              page
              para1
              para2
              para3
              heading
            }
          }
        `}
      render={data => (
          <div>
            <Helmet>
              <title>Brandon Bellero | About</title>
            </Helmet>
            <TopSection subtitle={data.aboutJson.page} className={css.about_color} />
            <div className={cx(css.content, css.about_bottom)}>
              <h2>{data.aboutJson.heading}</h2>
              <p>{data.aboutJson.para1}</p>
              <p>{data.aboutJson.para2}</p>
              <p>{data.aboutJson.para3}</p>
            </div>
          </div>
      )}
    />
  )
}