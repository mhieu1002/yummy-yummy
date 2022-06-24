import React, { useState } from "react";
import "./Pizza.scss";

const Pizza = (props) => {
  const {show, setShow, showPizza, onAdd } = props;
  const [activeSize, setActiveSize] = useState(1);

  const size = [
    {
      id: 1,
      size: "Smaill 6”",
    },
    {
      id: 2,
      size: "Medium 9”",
      price: "+80.000đ",
    },
    {
      id: 3,
      size: "Large 12”",
      price: "+160.000đ",
    },
  ];

  const crust = [
    {
      value: "thinCrust",
      name: "Thin Crust",
    },
    {
      value: "handtossed",
      name: "Handtossed",
    },
    {
      value: "newYorkCrust",
      name: "New York Crust",
    },
  ];

  const check = () => {
    setActiveSize(1)
    setShow(!show)
  }
  return (
    <form
      action=""
      className={show ? "show-form open-show-form" : "show-form"}
    >
      <i
        className="fas fa-times show-close"
        onClick={() => check()}
      ></i>
      <div className="show-pizza">
        <div className="show-pizza-left">
          <img src={showPizza.img} />
          {activeSize === 1 && (
            <span>{showPizza.price}đ</span>
          )}
          {activeSize === 2 && (
            <span>{showPizza.price + 80000}đ</span>
          )}
          {activeSize === 3 && (
            <span>{showPizza.price + 160000}đ</span>
          )}
        </div>

        <div className="show-pizza-right">
          <div className="boder-top"></div>
          <h3>{showPizza.title}</h3>
          <p>SIZE</p>
          <div className="size">
            {size.map((item, index) => (
              <div
                className={
                  activeSize === item.id
                    ? "size-box size-box-active"
                    : "size-box"
                }
                key={index}
                onClick={() => setActiveSize(item.id)}
              >
                <span>{item.size}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <p>CRUST</p>
          <div className="crust">
            {crust.map((item, index) => (
              <div className="crust-radio" key={index}>
                <input name="crust" type="radio" value={item.value} defaultChecked/>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <button className="btn-w100" onClick={() => onAdd(showPizza)}>Add To Cart</button>
        </div>
      </div>
    </form>
  );
};

export default Pizza;
