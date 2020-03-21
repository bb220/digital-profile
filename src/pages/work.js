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
          query workQuery {
            workJson {
              page
              history {
                title
                location
                description
                para2
                site
                time
              }
            }
          }
        `}
      render={data => {
        const styleProps = {
          linkColor: css.default_link,
          backColor: css.green
        }
        return (
        <Layout location={location} styleProps={styleProps}>
          <div>
            <Helmet>
              <title>Brandon Bellero | Work</title>
            </Helmet>
            <TopSection subtitle={data.workJson.page} className={css.work_color} />
            <div className={cx(css.content, css.work_bottom)}>
              {data.workJson.history.map((position, index) => <div key={index}>
                <h2>{position.title}</h2>
                <p className={css.work_link}>
                  <a href={position.site}>{position.location}</a>
                  <p className={css.time_range}>{position.time}</p>
                </p>
                <p>{position.description}</p>
                <p>{position.para2}</p>
              </div>)}
            </div>
          </div>
        </Layout>);
      }}
    />
  )
}
