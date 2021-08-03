import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Renders the name of the store at the head
function Header() {
  return (
    <header>
      <ToolBar>
        <Typography variant="h6" nowrap>
          Redux Store
        </Typography>
      </ToolBar>
      <Button color="inherit">
        Cart
      </Button>
    </header>
  )
}

export default Header;