import React from 'react'
import css from './style.module.scss'
import Footer from '../footer'
import NavBar from '../navbar'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

export default ({ children, styleProps}) => {
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
                    <NavBar className={cx(styleProps.linkColor, styleProps.backColor)} />
                    <div className={css.bottom}>
                        {children}
                    </div>
                    <Footer data={data.footerJson} />
                </div>
            )}
        />
    )
}
