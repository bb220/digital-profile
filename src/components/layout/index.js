import React from 'react'
import css from './style.module.scss'
import Footer from '../footer'
import NavBar from '../navbar'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

export default ({ children, location }) => {
    return (
        <StaticQuery
            query={
                graphql`
                query footerQuery {
                    footerJson {
                    linkedInUrl
                    github
                    email
                    }
                }
            `}
            render={data => (
                <div className={css.app_container}>
                    <NavBar className={cx({
                        [css.blue]: location.pathname === '/about',
                        [css.green]: location.pathname === '/work',
                        [css.link_color]: location.pathname === '/work' || location.pathname === '/about',
                        [css.default_link]: true
                    })} />
                    <div className={css.bottom}>
                        {children}
                    </div>
                    <Footer data={data.footerJson} />
                </div>
            )}
        />
    )
}
