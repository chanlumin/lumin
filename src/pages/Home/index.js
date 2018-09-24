import React, {Component} from 'react'
import './index.styl'
import Layout from '../../component/layout/layout';
import Row from '../../base/row'
import Col from  '../../base/col'
import Search from '../../component/search';

class Home extends Component {
  render() {
    return (
      <div className="home">
      <div className="topline"></div>
        <Layout>
          <Row className="content">
            <Col span="7">
              <Search></Search>
            </Col>
            <Col span="1"></Col>
            <Col span="16" offset="1">content</Col>
          </Row>
        </Layout>
      </div>
    )
  }
}

export default Home 
