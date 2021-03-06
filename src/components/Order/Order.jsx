import React from "react";
import "./Order.scss";

const Order = () => {
  return (
    <div className="w100" id="order">
      <section className="order">
        <h1 className="heading">Order Now</h1>
        <form action="">
          <div className="input">
            <div className="input-box">
              <span>your name</span>
              <input type="text" placeholder="enter your name" required/>
            </div>
            <div className="input-box">
              <span>phone number</span>
              <input
                type="tel"
                placeholder="enter your phone number"
                pattern="[0]{1}[0-9]{9}"
                required
              />
            </div>
          </div>
          <div className="input">
            <div className="input-box">
              <span>payment method</span>
              <select name="method">
                <option value="cash on delivery">cash on delivery</option>
                <option value="credit card">credit card</option>
              </select>
            </div>
            <div className="input-box">
              <span>date and time</span>
              <input type="datetime-local" required/>
            </div>
          </div>
          <div className="input">
          <div className="input-box">
            <span>your address</span>
            <textarea 
              name="" 
              placeholder="enter your address" 
              required
            />
          </div>
          <div className="input-box">
            <span>your message</span>
            <textarea 
              name="" 
              placeholder="enter your message" 
            />
          </div>
        </div>
        <input type="submit" value="order now" className="btn"></input>
        </form>
      </section>
    </div>
  );
};

export default Order;
