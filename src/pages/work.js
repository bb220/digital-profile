import React from 'react'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import logo from './logo.svg'

export default ({ data }) => {
  const {
    page,
    subtitle1,
    subtitle2,
    description,
    para2
  } = data.workJson

  return (
    <div>
      <Helmet>
        <title>Brandon Bellero | Work</title>
      </Helmet>
      <TopSection subtitle={page} className={css.work_color} logo={logo} />
      <div className={css.content}>
        <h2>{subtitle1}</h2>
        <h2>{subtitle2}</h2>
        <p>{description}</p>
        <p>{para2}</p>
      </div>
    </div>
  )
}

export const query = graphql`
query workQuery {
  workJson {
    page
    subtitle1
    subtitle2
    description
    para2
  }
}
`
