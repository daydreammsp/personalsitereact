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
  render () {
    if (isWidthUp('lg', this.props.width)) {
      return (
        <div className="navbar">
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
       {/* <ul>
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
       </ul> */}
    </div>

   </Grid>
  </Grid>
    
   </div>
    );
  }
}

export default withWidth()(Nav);
// const Nav = () => (
//   <div className="navbar">
//   <Grid container spacing={1}>
//   <Grid item xs={4}>
//   <div className="headerName">Jonathan Kruse</div>
//   </Grid>
//   <Grid item xs={6}>
  
//   </Grid>
//   <Grid item xs={2}>
//   <div>
    
//       <ul>
//         <li>
//           <Link to="/user">
//             User Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/info">
//             Info Page
//           </Link>
//         </li>
//       </ul>
//     </div>

//   </Grid>
//   </Grid>
    
//   </div>
// );


// export default Nav;
// export default compose(
//   withStyles(styles),
//   withWidth(),
// )(Nav);