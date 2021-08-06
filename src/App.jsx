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
import ProductDetails from './components/Products/ProductDetails';
import Footer from './components/Footer/Footer';

function App() {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const cart = useSelector(state => state.cart);

  return (
    <Router>
      <Container className="App">
        <Header />
        { cart.length && <SimpleCart /> }
        <Route path="/" exact>
          <Categories />
          { activeCategory.name && <ActiveCategory />  }
          <Products />
        </Route>
        <Route path="/cart" exact>
          <div>
            hello, world
          </div>
        </Route>
        <Switch>
          <Route path="/products/:id" children={<ProductDetails />} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
