import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';

import './App.scss';

import Header from './components/Header/Header';
import Categories from './components/Category/Categories';
import ActiveCategory from './components/Category/ActiveCategory';
import SimpleCart from './components/Cart/SimpleCart';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const cart = useSelector(state => state.cart);

  return (
    <Container className="App">
      <Header />
      <Categories />
      { cart.length && <SimpleCart /> }
      { activeCategory.name && <ActiveCategory />  }
      <Products />
      <Footer />
    </Container>
  );
}

export default App;
