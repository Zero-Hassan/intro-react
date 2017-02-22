require('./detail.scss');
import React from "react";
export default class Details extends React.Component {
constructor(){
  super();
  this.detailStyle={
    height:'61px',
    display:'flex',
    alignItems:'center',
    justifyContent:'spaceBetween'
  }
}
createDetail(cost){
  return(
    <div key={cost.id} className='box'>
    <span>{cost.date}</span>
    <span>{cost.description}</span>
    <span>{cost.total}</span>
    </div>
  )
}
  render(){
    return (
      <div>
      {this.props.costs.map(this.createDetail)}
      </div>
    )
  }
}
