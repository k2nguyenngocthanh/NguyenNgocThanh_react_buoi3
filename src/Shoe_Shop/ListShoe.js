import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.list.map((shoe) =>{
            return <ItemShoe handleOnClick={this.props.handleAddToCart} key={shoe.id} item={shoe}></ItemShoe>
        })}
      </div>
    )
  }
}
