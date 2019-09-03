import React, { Component } from "react";
import { Breadcrumb } from "antd";
import {connect} from 'react-redux'
@connect(
  state =>({menuName:state})
)
 class Bread extends Component {
  
  renderBread(bread){
    return bread.map((item,index)=>{
      return <Breadcrumb.Item key = {index}>{item}</Breadcrumb.Item>
    })
  }
  render() {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        {this.renderBread(this.props.menuName)}
      </Breadcrumb>
    );
  }
}
export default Bread
