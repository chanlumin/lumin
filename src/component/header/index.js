import React from 'react'
import './header.styl'
import {Link} from 'react-router-dom'
class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <div className="header-wrap">
        <Link to="/home"><div className="header__item">首页</div></Link>
        <Link to="/passage">
          <div className="header__item">文章
            <ul className="dropdown">
              <li>设计模式</li>
              <li>前端
                {/* <div className="dropdown__right-item">
                  <div>vue</div>
                  <div>react</div>
                  <div>lodash源码分析</div>
                </div> */}
              </li>
              <li>后端</li>
            </ul>
          </div>
        </Link>
        <Link to="/live"><div className="header__item">生活</div></Link>
        <Link to="/diary"><div className="header__item">日志</div></Link>
      </div>
    </div>
    )
  }
}

export default Header