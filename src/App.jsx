import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';

import './App.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import SimpleCart from './components/SimpleCart';
import Products from './components/Products'
import Footer from './components/Footer';
import ActiveCategory from './components/ActiveCategory';

function App() {
  const activeCategory = useSelector(state => state.store.activeCategory);
  const cart = useSelector(state => state.store.cart);

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
