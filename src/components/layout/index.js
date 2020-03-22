import React from 'react'
import css from './style.module.scss'
import Footer from '../footer'
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
                    <div className={css.bottom}>
                        {children}
                    </div>
                    <Footer data={data.footerJson} />
                </div>
            )}
        />
    )
}
