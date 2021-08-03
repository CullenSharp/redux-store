import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { setActiveCategory } from '../store/reducers/categories'

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  return (
    <Box>
      <Typography variant="h6">
        Browse Our Categories
      </Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {categories.map(category => (
          <Button 
            key={category}
            onClick={e => dispatch(setActiveCategory(category))}
          >
            {category}
          </Button>
        ))
        }
      </ButtonGroup>
    </Box>
  );
}

export default Categories;