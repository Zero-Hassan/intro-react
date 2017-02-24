import React from "react";
import LinkTo from './Link';

export default class Header extends React.Component {
  constructor(){
    super();
    this.headerStyle={
      width:'100%',
      height:'5vh',
      backgroundColor:'#797156',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      position:'fixed',
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
