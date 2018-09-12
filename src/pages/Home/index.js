import React, {Component} from 'react'
import Row from '../../base/row'
import Col from  '../../base/col'
import './index.styl'

class Home extends Component {
  render() {
    return <div>
      <Row gutter={10}>
        <Col span={8}>
          <div style={{backgroundColor: 'red'}}>hello</div>
        </Col>
        <Col span={8}>
          <div style={{backgroundColor: 'blue'}}>hello</div>
        </Col>
        <Col span={8}>
          <div style={{backgroundColor: 'darkBlue'}}>hello</div>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={8} offset={10}>
          <div style={{backgroundColor: 'red'}}>hello</div>
        </Col>
      </Row>
    </div>
  }
}

export default Home 
