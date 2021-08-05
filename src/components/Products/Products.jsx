import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { addItemToCart, fetchProducts } from '../../store/actions/actions'

function Products () {
  const [products, setProducts] = useState([]);
  
  const dispatch = useDispatch();

  const activeCategory = useSelector(state => state.categories.activeCategory);
  const productsFromStore = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // filters product list by an active category
  useEffect(() => {
    if (!activeCategory.name) { setProducts([...productsFromStore ]);}

    else {
      const productsFilteredByCategory = productsFromStore
          .filter(product => product.category === activeCategory.name);

      setProducts([...productsFilteredByCategory]);
    }
  }, [activeCategory, productsFromStore]);

  return (
    <React.Fragment>
      {products.map(product => (
        product.inStock ? 
          <Card key={product.name}>
            <CardActionArea>
              {/* todo: remove inline styling later */}
              <CardMedia 
                image="http://placekitten.com/400/300"
                title="image of product"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color= "textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
              <Button 
                color="inherit"
                onClick={e => dispatch(addItemToCart(product))}
              >
                Add to Cart
              </Button>
              <Button color="inherit">
                View Details
              </Button>
            </CardActionArea>
          </Card>
        : null
      ))
      }
    </React.Fragment>
  );
}

export default Products;