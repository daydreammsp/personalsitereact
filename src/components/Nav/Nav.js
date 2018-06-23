import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Nav = () => (
  <div className="navbar">
  <Grid container spacing={12}>
  <Grid item xs={4}>
  <h2>Jonathan Kruse</h2>
  </Grid>
  <Grid item xs={4}>
  
  
  </Grid>
  <Grid item xs={4}>
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
