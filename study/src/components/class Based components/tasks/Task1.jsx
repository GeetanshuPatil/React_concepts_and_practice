import React, { Component } from "react";

export default class Task1 extends Component{
  constructor (){
    super()
    this.state = {
      cartItems: 0,
      amount: 0
    }
  }
  render(){
    return(
      <div>
        <h1>Cart Items: {this.state.cartItems} ({this.state.amount})</h1>
        <button onClick={()=>{
          this.setState({...this.state, cartItems: this.state.cartItems + 1, amount: this.state.amount + Math.floor(Math.random()*100)})
        }}>Add to Cart</button>
      </div>
    )
  }
}
