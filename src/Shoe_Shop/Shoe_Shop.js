import React, { Component } from 'react'
import { dataShoe } from './Data_Shoe';
import Cart from './Cart';
import ListShoe from './ListShoe';

export default class Shoe_Shop extends Component {
  state={
    listShoe:dataShoe,
    cart:[],
  }
  handleAddToCart=(shoe)=>{
    let cloneCart=[...this.state.cart];
    let index =cloneCart.findIndex((item)=>{return item.id==shoe.id})
    if(index==-1){
      let newShoe={...shoe, soLuong:1};
      cloneCart.push(newShoe)
    }
    else{
      cloneCart[index].soLuong++;
    }
    this.setState({
      cart: cloneCart,
  });
}
handleRemoveCartItem = (cart) => {
  let cartItem = [...this.state.cart];
  let index = cartItem.findIndex((item) => {
    return cart.id === item.id;
  });
  cartItem.splice(index, 1);
  this.setState({ cart: cartItem });
};






  render() {
    return (
      <div>
          <h2>{this.props.children}</h2>
        <Cart cart={this.state.cart}
         handleRemoveCartItem={this.handleRemoveCartItem}></Cart>
        <ListShoe handleAddToCart={this.handleAddToCart} list={this.state.listShoe}></ListShoe>
      </div>
    )
  }
}
