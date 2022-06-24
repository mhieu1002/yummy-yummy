import React from "react";
import "./Cart.scss";

const Cart = (props) => {
  const { cart, setCart, cartItems, onAdd, onRemove } = props;
  const TotalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <form action="" className={cart ? "cart-form open-cart-form" : "cart-form"}>
      <i className="fas fa-times cart-close" onClick={() => setCart(!cart)}></i>
      {cartItems.length === 0 && <h2>Your Shopping Cart is empty!</h2>}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} />
            <div className="cart-item-name">
              <h3>{item.title}</h3>
            </div>
            <h3 className="cart-item-price">{item.price}đ</h3>
            <div className="qty">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <h3>{item.qty}</h3>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <i className="fas fa-times cart-item-delete"></i>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <div className="total">
              <strong>Total Price: </strong>
              <strong>{TotalPrice}VND</strong>
              <a className="btn" href="#order" onClick={() => setCart(!cart)}>Checkout</a>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default Cart;
