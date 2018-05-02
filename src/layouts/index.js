import React from 'react'
import css from './style.module.scss'
import Footer from './footer'

export default ({ children, location, data }) => {
  return (
    <div className={css.app_container}>
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
