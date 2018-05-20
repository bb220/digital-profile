import React from 'react'
import css from './style.module.scss'
import Footer from '../components/footer'
import Link from 'gatsby-link'
import NavBar from '../components/navbar'
import cx from 'classnames'

export default ({ children, location, data }) => {
  return (
    <div className={css.app_container}>
      <NavBar className={cx({
          [css.blue]: location.pathname === '/about',
          [css.green]: location.pathname === '/work',
          [css.link_color]: true
      })}/>
      <div className={css.bottom}>
        {children()}
      </div>
      <Footer data={data.footerJson} />
    </div>
  )
}

export const query = graphql`
query footerQuery {
  footerJson {
    linkedInUrl
    github
    email
  }
}
`
