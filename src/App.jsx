import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrivateRoute from "./routes/PrivateRoute";
// Layout
import PageContent from "./layout/PageContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Sayfa bileşenleri
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Address from "./pages/Address";
import CompleteOrder from "./pages/CompleteOrder";
import Login from "./pages/Login";

// Thunks
import { getMe } from "./store/thunks/clientThunks";

function App() {
  const dispatch = useDispatch();

  // Eğer localStorage'da token varsa kullanıcı bilgilerini al
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

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
          <Route path="/team" component={Team} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/address" component={Address} />
          <Route path="/complete-order" component={CompleteOrder} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/cart" component={Cart} />
  <PrivateRoute path="/payment" component={Payment} />
  <PrivateRoute path="/address" component={Address} />
  <PrivateRoute path="/complete-order" component={CompleteOrder} />
        </Switch>
        <ToastContainer position="top-center" autoClose={3000} />
      </PageContent>
    </Router>
  );
}

export default App;
