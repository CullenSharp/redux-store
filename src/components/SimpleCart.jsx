import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeItemFromCart } from '../store/actions/actions'

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


function SimpleCart() {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.cart );

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts([...cartItems])
  }, [cartItems]);

  return (
    <Box>
      <List>
        { products.map( product => (
          <ListItem key={product.name}>
            <Typography variant="body2">
              {product.name}
            </Typography>
            <CloseIcon 
              role="button"
              onClick={(e) => dispatch(removeItemFromCart(product._id))} 
            />
          </ListItem>
          ))
        }
      </List>
    </Box>
  );
}

export default SimpleCart
