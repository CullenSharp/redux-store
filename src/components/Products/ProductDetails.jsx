import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts, addItemToCart } from '../../store/actions/actions';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

function ProductDetails() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const selectProducts = useSelector(state => state.products);

  const { id } = useParams();
  const product = selectProducts.find(product => product._id === id);

  function handleClick(e) {
    dispatch(addItemToCart(product));
  }

  return (
    <div>
      <Typography variant="h2">
        {product.name}
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body2">
            Available: {product.inStock}
          </Typography>
          <Typography variant="body2">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Add To Cart
      </Button>
      <Box>
        <Typography variant="h4">
          Related Items
        </Typography>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="body2">Suggestion 3</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="body2">Suggestion 3</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="body2">Suggestion 3</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Typography variant="h4">
            Product Details
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography variant="h6">
                Specifications
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography variant="h6">
                User Reviews
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  )
}

export default ProductDetails;