import React from 'react';
import { useSelector } from  'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';
import ListItemText from '@material-ui/core/ListItemText';


function Checkout() {
  const selectCart = useSelector(state => state.cart);

  return(

    <div>
      <Typography variant="h3"> Checkout </Typography>
      <Card>
        <List dense={true}>
          { selectCart.map( product => {
            return(
              <ListItem>
                <ListItemText>
                  {product.name}
                </ListItemText>
                <ListItemText>
                  ${product.price}
                </ListItemText>
                <ListItemIcon>
                  <CloseIcon color="secondary" />
                </ListItemIcon>
              </ListItem>
            );
          })

          }
        </List>
      </Card>
    </div>
  );
}

export default Checkout;
