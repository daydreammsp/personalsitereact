import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import MobileMenu from './MobileMenu/MobileMenu';
import Twitter from './twitter1.png';
import Github from './Github.png';
import Instagram from './Instagram.png';





class Nav extends React.Component {
  state ={
    isTop: true,
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render () {
    let backgroundvar = 'navbar'
    if (!this.state.isTop){
      backgroundvar = 'navbar1'
    }
   
    if (isWidthUp('lg', this.props.width)) {
      
      return (
        
        <div className={backgroundvar}>
        
   <Grid container spacing={0}>
  <Grid item xs={4}>
     <div className="headerName">Jonathan Kruse</div>
   </Grid>
  <Grid item xs={4}>
  
   </Grid>
   <Grid item xs={4}>
  <div>
    
       <ul>
         <li className="navItems">
           <Link to="/mainlandingpage">
             Home
          </Link>
         </li>
        <li className="navItems">
           <Link to="/info">
             Info Page
           </Link>
         </li>
         <li className="navItems"><a href="https://twitter.com/perriair1"><img src={Twitter} width="30px"/></a></li>
         <li className="navItems"><a href="https://github.com/daydreammsp"><img src={Github} width="30px"/></a></li>
         <li className="navItems"><a href="https://www.instagram.com/perriair1/"><img src={Instagram} width="30px"/></a></li>
       </ul>
    </div>

   </Grid>
  </Grid>
  </div>
  //  </div>
      )
    }
  
    return (
      <div className="navbar">
   <Grid container spacing={0}>
  <Grid item xs={4}>
     <div className="headerName">Jonathan Kruse</div>
   </Grid>
  <Grid item xs={6}>
  
   </Grid>
   <Grid item xs={2}>
  <div>
    <MobileMenu/>
    
    </div>

   </Grid>
  </Grid>
    
   </div>
    );
  
  }

}

export default withWidth()(Nav);
