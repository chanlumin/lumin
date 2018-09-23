import React from 'react'
import './header.styl'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCateList} from './store/action'
class Header extends React.Component {
  componentDidMount() {
    this.props.getCateList()
  }

  getHeader() {
    console.log(this.props.header)
  }
  render() {
    return (
    <div className="header">
      <div className="header-wrap">
      <Link to="/home"><div className="header__item">首页</div></Link>
      {
        this.props.header.categoryList.map((item,index) => {
          return <div className="header__item" key={index}><Link to={item.path}>{item.title}</Link>
          <ul className="dropdown">
            {item.children ? item.children.map((child, index)=> {
              return<li key={index} to={child.path}><Link to={child.path}>{child.title}</Link></li>   
            }): null}
          </ul>
       </div>
        })
      }
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return  {
    header: state.header
  }
}
// const mapDispatchToProps = {
//   // normally is Aciton creators
// }
export default connect(mapStateToProps,{getCateList})(Header)