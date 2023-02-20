import React, { Component } from "react";

export default class Cart extends Component {
  renderTbody = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleDecreaseQuantity(item);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <strong className="mx-3">{item.soLuong}</strong>
            <button
              onClick={() => {
                this.props.handleIncreaseQuantity(item);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>

          <td>{item.price * item.soLuong}</td>
          <td>
            <img src={item.image} style={{ width: 80 }} alt="" />
          </td>

          <td>
            <button
              onClick={() => {
                this.props.handleRemoveCartItem(item);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Img</th>
          <th>Thao tác</th>
          <tbody>{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}
