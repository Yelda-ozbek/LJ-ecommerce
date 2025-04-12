import "keen-slider/keen-slider.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail"; 
import PageContent from "./layout/PageContent";
import Team from "./pages/Team";
import Cart from "./pages/Cart";



// Sayfa bileşenleri
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Address from "./pages/Address";
import CompleteOrder from "./pages/CompleteOrder";


function App() {
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/address" component={Address} />
          <Route path="/complete-order" component={CompleteOrder} />


          

        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
