import React, { Component } from 'react'
import css from './style.module.scss'
import Link from 'gatsby-link'
import NavBar from '../navbar'
import cx from 'classnames'

export default class TopSection extends Component {
  constructor() {
    super()
    this.state = {
      scrollHeight: 0
    }
  }

  componentDidMount() {
    // TODO(bb220): optimize scroll listener
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    this.setState({ scrollHeight: window.scrollY })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }


  render() {
    const {
      subtitle,
      className,
      logo
    } = this.props
    const opacity = Math.min((30/ this.state.scrollHeight) -.3 , 1)
    return (
      <div>
      <div className={cx({
          [css.logo]: true,
          [className]: true
        })}>
        <NavBar className={css.link_color} />
        <Link to='/'>
          <object className={css.object} type='image/svg+xml' data={logo}></object>
        </Link>
      </div>
      <div
        className={cx({
          [css.top]: true,
          [className]: true
        })}>
          <h3 style={'opacity', {opacity}}className={css.subtitle}>{subtitle}</h3>
      </div>
      </div>
    )
  }
}
