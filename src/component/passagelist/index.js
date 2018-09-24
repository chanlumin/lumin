import React from 'react'
import './index.styl'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getArticleList} from './store/action'

class PassageList extends React.Component {
  componentDidMount() {
    this.props.getArticleList()
  }
  render() {
    return (
      <div className="passage-content">
      {
        this.props.articlelist.map((item, index) => (
          <div className="post" role="article" key={index}>
          <header className="post-header">
          {console.log(item.content.slice(0,100))}

            <ul className="clear">
              <li>
                <time>{item.created_time}</time>
              </li>
              <li className="cats">
                <Link to="/categories/iOS/">{item.category}</Link>               
              </li>
            </ul>
            <h2><Link to="article/{item._id}">{item.title}</Link></h2>
          </header>
          <div className="post-content">
            <div dangerouslySetInnerHTML={{__html: item.content.slice(0,180)}}></div>
            <p><Link to="article/{item._id}" role="button">Read More</Link></p>
          </div>
        </div>
        ))
      }
      </div>

    )
  }
}

export default connect(state=>state, {getArticleList})(PassageList)