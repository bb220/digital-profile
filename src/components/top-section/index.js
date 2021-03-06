import React, { Component } from 'react'
import css from './style.module.scss'
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
      className
    } = this.props

    const dynamicOpacity = {
      opacity: Math.min((30 / this.state.scrollHeight) - .3, 1)
    }

    return (
        <div
          className={cx({
            [css.top]: true,
            [className]: true
          })}>
          <div className={css.subtitle_container}>
            <h3 style={dynamicOpacity} className={css.subtitle}>{subtitle}</h3>
          </div>
      </div>
    )
  }
}
