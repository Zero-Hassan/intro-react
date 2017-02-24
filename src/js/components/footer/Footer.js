require('./footer.scss');
import React from "react";
export default class Footer extends React.Component {
  constructor(){
    super();

  }
  render(){
    return (
      <div className="footer">
      <div>Home Finance Tool V 0.0.1</div>
      <div>Contact</div>
      </div>
    )
  }
}
