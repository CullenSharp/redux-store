import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Container from '@material-ui/core/Container';

import './App.scss';

import Header from './components/Header/Header';
import Categories from './components/Category/Categories';
import ActiveCategory from './components/Category/ActiveCategory';
import SimpleCart from './components/Cart/SimpleCart';
import Products from './components/Products/Products';
import Checkout from './components/Cart/Checkout';
import ProductDetails from './components/Products/ProductDetails';
import Footer from './components/Footer/Footer';

function App() {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const cart = useSelector(state => state.cart);

  return (
    <Router>
      <Container className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            { cart.length && <SimpleCart /> }
            <Categories />
            { activeCategory.name && <ActiveCategory />  }
            <Products />
          </Route>
          <Route path="/checkout" exact children={<Checkout />} />
          <Route path="/products/:id">
          { cart.length && <SimpleCart /> }
            <ProductDetails />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
