import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Crispystrudel from './crispyStrudel.jpg';



const mapStateToProps = state => ({
    user: state.user,
  });

  class MainLandingPage extends Component {
    componentDidMount() {
      
    }
    render() {
        
    
    
    
        return (
          <div>
             <Nav /> 
      
            <img className="mainImg" src={Crispystrudel}/>
          </div>
        );
      }
    }
    
    // this allows us to use <App /> in index.js
    export default connect(mapStateToProps)( MainLandingPage );