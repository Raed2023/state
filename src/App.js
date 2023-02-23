import "./App.css";
import React, { Component } from 'react'
import lawyer from "./lawyer.jpg";


export default class App extends Component {
  state={
    fullName:"Raed ben abdallah",
    bio:"Raed is a highly accomplished lawyer with a wealth of experience in his field. He was born and raised in a family of lawyers and from an early age was exposed to the intricacies of the legal profession. This early exposure sparked his passion for law and drove him to pursue a career in this field",
     profession:"Lawyer",
    shows:true,
    count:0,
    };
    handleIncrement = () => this.setState({ count: this.state.count + 1 });
    handleShow = () => this.setState({ shows: !this.state.shows });
    componentDidMount(){
      console.log("componentDidMount")
      setInterval(this.handleIncrement, 1000)
    }
    
  render() {
    return (
      <div>
        <button onClick={this.handleShow}>Show</button>
        {this.state.shows ?(
<>
<h1>{this.state.fullName}</h1>
<h3>{this.state.profession}</h3>
<img src={lawyer} alt="" />
<p>{this.state.bio}</p>
<h1>{this.state.count}</h1>

</>
) : null}



      </div>
    );
  }
}

