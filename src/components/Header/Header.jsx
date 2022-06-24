import React from "react";
import { useState } from "react";
import Cart from "../../form/Cart/Cart";
import Search from "../../form/Search/Search";
import User from "../../form/User/User";
import "./Header.scss";

const Header = (props) => {
  const { cartItems, onAdd, onRemove, countCartItems } = props;
  const navlist = [
    {
      display: "Home",
      href: "#home",
    },
    {
      display: "About",
      href: "#about",
    },
    {
      display: "Menu",
      href: "#menu",
    },
    {
      display: "Review",
      href: "#review",
    },
    {
      display: "Order",
      href: "#order",
    },
    {
      display: "FAQ",
      href: "#faq",
    },
  ];

  const [active, setActive] = useState(false);
  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <div>
      <header>
        <a href="#" className="logo">
          Pizza.
        </a>

        <nav className={active ? "navbar active" : "navbar"}>
          {navlist.map((item, index) => (
            <a
              className={page === item.display ? "on-button" : null}
              href={item.href}
              key={index}
              onClick={() => setPage(item.display)}
            >
              {item.display}
            </a>
          ))}
        </nav>

        <div className="icons">
          <i
            className={
              active ? "fas fa-times menu-bars" : "fas fa-bars menu-bars"
            }
            onClick={() => setActive(!active)}
          ></i>
          <i className="fas fa-search" onClick={() => setSearch(!search)}></i>
          <i className="fas fa-user" onClick={() => setUser(!user)}></i>
          <i className="fas fa-shopping-cart" onClick={() => setCart(!cart)}>
            {""} {countCartItems ? <span>{countCartItems}</span> : ""}
          </i>
        </div>
      </header>
      <Search search={search} setSearch={setSearch} />
      <User user={user} setUser={setUser} />
      <Cart
        cart={cart}
        setCart={setCart}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  );
};

export default Header;
