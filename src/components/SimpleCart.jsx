import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeItemFromCart, changeQuantity} from '../store/reducers/categories';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';


function SimpleCart() {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector(state => state.store.cart );

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts([...cartItems])
  }, [cartItems]);

  return (
    <Box>
      <List>
        { products.map( product => (
          <ListItem key={product.name}>
            <Select
              value={cartItems
                  .find(item => item.name === product.name).quantity}
              onChange={(e) => dispatch(
                changeQuantity({name: product.name, quantity: e.target.value})
              )}
              displayEmpty
            >
              <MenuItem value={1}> 1 </MenuItem>
              <MenuItem value={2}> 2 </MenuItem>
              <MenuItem value={3}> 3 </MenuItem>
              <MenuItem value={4}> 4 </MenuItem>
              <MenuItem value={5}> 5 </MenuItem>
            </Select>
            <Typography variant="body2">
              {product.name}
            </Typography>
            <CloseIcon 
              role="button"
              onClick={(e) => dispatch(removeItemFromCart(product.name))} 
            />
          </ListItem>
          ))
        }
      </List>
    </Box>
  );
}

export default SimpleCart
