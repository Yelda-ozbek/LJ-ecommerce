import "keen-slider/keen-slider.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageContent from "./layout/PageContent";

// Sayfa bileşenleri
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";

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
        </Switch>
      </PageContent>
    </Router>
  );
}

export default App;
