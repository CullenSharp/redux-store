import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function ActiveCategory() {
  const [activeCategory, setActiveCategory] = useState({});

  const activeCategoryInStore = useSelector(state => state.categories.activeCategory);

  useEffect(() => {
    setActiveCategory({...activeCategoryInStore});
  }, [activeCategoryInStore])
  
  return(
    <Box>
      <Typography variant="h2">
        { activeCategory.name }
      </Typography>
      <Typography variant="body2">
        {activeCategory.description}
      </Typography>
    </Box>
  )
}

export default ActiveCategory;
