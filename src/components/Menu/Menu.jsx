import React, { useState } from "react";
import Pizza from "../../form/Pizza/Pizza";
import "./Menu.scss";

const Menu = (props) => {
  const { pizza, onAdd } = props;
  const [noOfElement, setNoOfElement] = useState(9);
  const [show, setShow] = useState(false);
  const [showPizza, setShowPizza] = useState({});

  const slice = pizza.slice(0, noOfElement);

  const check = (item) => {
    setShowPizza(item);
    setShow(!show);
  };

  return (
    <div className="w100" id="menu">
      <section className="menu">
        <h1>our menu</h1>
        <div className="box-container">
          {slice.map((item, index) => (
            <div className="box" key={index}>
              <i
                className="fas fa-eye menu-eye"
                onClick={() => check(item)}
              ></i>
              <img src={item.img} />
              <h3>{item.title}</h3>
              <span>{item.price}đ</span>
              <a onClick={() => check(item)} className="btn">
                {item.add}
              </a>
            </div>
          ))}
        </div>
        {noOfElement <= pizza.length ? (
          <h3
            className="load-more"
            onClick={() => setNoOfElement(noOfElement + 3)}
          >
            Load More...
          </h3>
        ) : (
          <h3 className="load-more" onClick={() => setNoOfElement(9)}>
            Clean Up
          </h3>
        )}
      </section>

      <Pizza
        show={show}
        setShow={setShow}
        showPizza={showPizza}
        onAdd={onAdd}
      />
    </div>
  );
};

export default Menu;
