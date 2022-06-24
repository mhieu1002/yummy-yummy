import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Review from "./components/Review/Review";
import Scroll from "./components/Scroll/Scroll";
import data from "./data/data";
import { useState } from 'react';

function App() {
  const {pizza} = data;
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const onAdd = (pizza) => {
    const exist = cartItems.find(x => x.id === pizza.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === pizza.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...pizza, qty: 1}]);
    }
  }
  const onRemove = (pizza) => {
    const exist = cartItems.find(x => x.id === pizza.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== pizza.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === pizza.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  }
  return (
    <div className="App">
      <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length}/>
      <Home />
      <About />
      <Menu pizza={pizza} onAdd={onAdd}/>
      <Review />
      <Order />
      <FAQ />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
