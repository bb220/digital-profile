import React from 'react'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import logo from './logo.svg'

export default ({ data }) => {
  const {
    page,
    heading,
    para1,
    para2,
    para3
  } = data.aboutJson

  return (
    <div>
      <Helmet>
        <title>Brandon Bellero | About</title>
      </Helmet>
      <TopSection subtitle={page} className={css.about_color} logo={logo} />
      <div className={css.content}>
        <h2>{heading}</h2>
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
      </div>
  </div>
  )
}

export const query = graphql `
query aboutQuery {
  aboutJson {
    page
    para1
    para2
    para3
    heading
  }
}
`
