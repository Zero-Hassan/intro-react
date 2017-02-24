import React from "react";
import {Link} from "react-router";

export default class LinkTo extends React.Component {
  constructor(){
    super();
    this.itemStyle={
      width:'25%',
      cursor:'pointer',
      paddingLeft:'25px',

    }
    this.linkStyle={
      color:'rgba(250,250,250,.7)',
      textDecoration:'none',
      fontWeight:'bold',
      fontSize:'1.6em',
      width:'100%',
      display:'block',
      ':hover':{
        opacity:'0.1'
      }
    }
  }
  render(){
    return (
      <div style={this.itemStyle}>
      <Link style={this.linkStyle} to={this.props.to}>
      {this.props.name}
      </Link>
      </div>
    )
  }
}
