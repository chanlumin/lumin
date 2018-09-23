import React from 'react'
import Header from '../header/index'
import './index.styl'
class Layout extends React.Component {
  render() {
  
    return (
    <div className="layout">
      <Header></Header>
      {this.props.children}
      {/* <BottomFooter> */}
    </div>
    )
  }
}

export default Layout