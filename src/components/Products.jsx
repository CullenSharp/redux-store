import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Products () {
  const [products, setProducts] = useState([]);
  
  const activeCategory = useSelector(state => state.store.activeCategory);
  const productsFromStore = useSelector(state => state.store.products);
  
  // filters product list by an active category
  useEffect(() => {
    if (!activeCategory.name) { setProducts([...productsFromStore ]);}

    else {
      const productsFilteredByCategory = productsFromStore
          .filter(product => product.category === activeCategory.name);

      setProducts([...productsFilteredByCategory]);
    }
  }, [activeCategory, productsFromStore])

  return (
    <React.Fragment>
      {products.map(product => (
        <Card key={product.name}>
          <CardActionArea>
            {/* todo: remove inline styling later */}
            <CardMedia 
              image="http://placekitten.com/400/300"
              title="image of product"
              style={{ width: '400px', height: '300px',  }}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color= "textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
            <Button color="inherit">
              Add to Cart
            </Button>
            <Button color="inherit">
              View Details
            </Button>
          </CardActionArea>
        </Card>
      ))
      }
    </React.Fragment>
  );
}

export default Products;