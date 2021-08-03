import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

function SimpleCart() {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.store.cart );

  useEffect(() => {
    setProducts([...cartItems])
  }, [cartItems])

  return (
    <Box>
      <List>
        { products.map( product => (
          <ListItem key={product.name}>
            <Typography variant="body2">
              {product.name}
            </Typography>
          </ListItem>
          ))
        }
      </List>
    </Box>
  );
}

export default SimpleCart
