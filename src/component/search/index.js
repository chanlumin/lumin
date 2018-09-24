import React from 'react'
import {connect} from 'react-redux'
import './index.styl'
import {getSearchList} from './store/action'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleChange(key,e) {
    this.setState({
      [key]: e.target.value
    })
    this.props.getSearchList(this.state)
    console.log(this.props.search)

    // this.props.getSearchList
  }
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="输入你想要搜索的内容" onChange={e=> this.handleChange('searchTxt',e)}></input> <i className="iconfont">&#xe61e;</i>
        {
          this.props.search.length ? 
          <div className="search__dropdown">
            {this.props.search.map((item, index)=> (
              <div className="search__dropdown-item" key={index}>{item.title}</div>
            ))}
{/*            
            <div className="search__dropdown-item">不好看啊</div>
            <div className="search__dropdown-item">这是什么东西</div> */}
          </div> : null
        }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return state
}
export default connect(mapStateToProps, {getSearchList})(Search)