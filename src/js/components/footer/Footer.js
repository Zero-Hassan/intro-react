import React from "react";
export default class Footer extends React.Component {
  constructor(){
    super();
    this.footerStyle={
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
      <div style={this.footerStyle}>
      Footer
      </div>
    )
  }
}
