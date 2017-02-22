import React from "react";
import LinkTo from './Link';

export default class Header extends React.Component {
  constructor(){
    super();
    this.headerStyle={
      width:'100%',
      height:'60px',
      backgroundColor:'#F26142',
      color:'#fff',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around'
    };

  }
  render(){
    return (
      <div style={this.headerStyle}>
      <LinkTo  to="/fixed" name="Fixed"/>
      <LinkTo  to="/summary" name="Summary"/>
      <LinkTo  to="/variable" name="Variable"/>
      </div>
    )
  }
}
