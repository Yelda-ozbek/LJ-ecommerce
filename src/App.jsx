import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import Login from "./pages/Login";
import CompleteOrder from "./pages/CompleteOrder";

import { fetchCategories } from "./store/thunks/productThunks";
import { getMe } from "./store/thunks/clientThunks"; // ❣️
import { verifyToken } from "./store/thunks/clientThunks";
import React, { useEffect } from "react";
import { verifyUser } from "./store/thunks/clientThunks";
import { ToastContainer } from "react-toastify"; // ⭐⭐
import "react-toastify/dist/ReactToastify.css"; 
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken()); // ✅ ilk açıldığında token'ı doğrula
    dispatch(fetchCategories());
    dispatch(verifyUser());
  }, [dispatch]);
  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:gender/:categoryName/:categoryId/:productSlug/:id" component={ProductDetail} />
          <Route path="/shop/:gender/:categoryName/:categoryId" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
      
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/create-order" component={CreateOrder} />
          <Route path="/complete-order" component={CompleteOrder} />
        </Switch>
        <ToastContainer position="top-right" autoClose={3000} />
      </PageContent>
    </Router>
  );
}

export default App;
