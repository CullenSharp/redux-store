import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


// renders a footer with copyright and contact info
// todo: add a button to link to my github with icon
function Footer() {
  return(
    <footer>
      <Typography variant="h6" noWrap>
        © 2021 Cullen Sharp
      </Typography>
    </footer>
  );
}

export default Footer;
