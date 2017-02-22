require('./detail.scss')
import React from "react";
import Totales from './Totales';
import AddCost from './AddCost';
import Details from './Details';

export default class Fixed extends React.Component {
  constructor(props){
    super(props);
    this.state={costs:[]}
  }
componentDidMount(){
  var newCostes=[
    {
      id:12,
      total:123,
      date:'20-11-17',
      description:'Luz'
    },{
      id:13,
      total:123,
      date:'20-11-17',
      description:'Luz'
    },{
      id:14,
      total:123,
      date:'20-11-17',
      description:'Luz'
    },{
      id:15,
      total:123,
      date:'20-11-17',
      description:'Luz'
    }
  ];
  this.setState({costs:newCostes});
};

  render(){
    return (
      <div>
      <Totales />
      <AddCost />
      <Details costs={this.state.costs} />
      </div>
    )
  }
}
