import React from 'react'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import cx from 'classnames'

export default ({ data }) => {
  const {
    page,
    history
  } = data.workJson

  return (
    <div>
      <Helmet>
        <title>Brandon Bellero | Work</title>
      </Helmet>
      <TopSection subtitle={page} className={css.work_color} />
      <div className={cx(css.content, css.work_bottom)}>
        {history.map((position, index) =>
          <div key={index}>
            <h2>{position.title}</h2>
            <p className={css.work_link}>
              <a href={position.site}>{position.location}</a>
            </p>
            <p>{position.description}</p>
            <p>{position.para2}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
query workQuery {
  workJson {
    page
    history {
      title
      location
      description
      para2
    }
  }
}
`
