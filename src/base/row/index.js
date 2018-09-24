import React from 'react'
import PropTypes from 'prop-types'
import './index.styl'
class Row extends React.Component {
  static propTypes = {
    gutter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state= {}
  }
  componentWillMount() {
    this._style()
  }
  /**
   * 计算style
   */
  _style() {
    const margin = `-${Number(this.props.gutter) / 2}px`
    const style = {marginLeft: margin, marginRight: margin}
    if(this.props.gutter) {
      this.setState({
        style
      })
    } 
  }
  render() {
    return (
    <div className={`lui-row ${this.props.className}`} style={this.state.style}>
      {this.props.children}
    </div>
    )
  }
}
export default Row