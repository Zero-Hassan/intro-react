import React from "react";
//import {Link} from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default class App extends React.Component {
 constructor(){
   super();
   this.appStyle={
     width:'70%',
     margin:'auto',
     backgroundColor:'#f9e7b1',
   };
   this.mainStyle={
     height:'61.11vh',
     padding:'25px'

   }
 }

  render(){
    return (
      <div style={this.appStyle}>
      <Header/>
      <main style={this.mainStyle}>
      {this.props.children}
      </main>
      <Footer/>
      </div>
    )
  }
}
