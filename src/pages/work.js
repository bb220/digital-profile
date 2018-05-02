import React from 'react'
import Link from 'gatsby-link'
import css from './style.module.scss'
import TopSection from '../components/top-section'
import Helmet from 'react-helmet'
import logo from './logo.svg'

export default ({ data }) => {
  const {
    page,
    subtitle1,
    subtitle2,
    description
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
        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className={css.link_container}>
            <Link to='/about'>About</Link>
          </div>
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
  }
}
`
