import React from 'react';

import Container from '@material-ui/core/Container';

import './App.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products'
import Footer from './components/Footer';

function App() {
  return (
    <Container className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Container>
  );
}

export default App;
