import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Nav = () => (
  <div className="navbar">
  <Grid container spacing={1}>
  <Grid item xs={4}>
  <div className="headerName">Jonathan Kruse</div>
  </Grid>
  <Grid item xs={6}>
  
  </Grid>
  <Grid item xs={2}>
  <div>
    
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
      </ul>
    </div>

  </Grid>
  </Grid>
    
  </div>
);

export default Nav;
