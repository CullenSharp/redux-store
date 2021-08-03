import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Products () {
  const products = useSelector(state => state.categories.products);
  const activeCategory = useSelector(state => state.categories.activeCategory);


  useEffect(() => {
    let activeProducts;
    if (!activeCategory) { return activeProducts = products }
    activeProducts = products
        .filter(product => product.category === activeCategory);

    return activeProducts;
  }, [activeCategory, products]);

  return (
    <React.Fragment>
      {products.map(product => (
        <Card key={product.name}>
          <CardActionArea>
            <CardMedia 
              image="http://placekitten.com/200/300"
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