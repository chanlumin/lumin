import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.styl'

class Col extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    span: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    offset: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }
  static defaultProps = {
    span: 0,
    offset: 0
  }
  componentWillMount() {
    this._computedClass()
    console.log(this)
  }
  /**
   * 绑定传递的span和offset
   */
  _computedClass() {
    const colClass = classNames({
      [`lui-col-${this.props.span}`]:true, 
      [`lui-offset-${this.props.offset}`]:true, 
      ['lui-col']:true
    })
    this.setState({colClass})
  }
  _computedstyle() {
  }
  render() {
    return (
    <div className={this.state.colClass}>
      {this.props.children}
    </div>
    )
  }
}

export default Col
