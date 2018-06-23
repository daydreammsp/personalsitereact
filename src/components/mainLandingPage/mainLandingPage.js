import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

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
            <h1>Hello World</h1>
          </div>
        );
      }
    }
    
    // this allows us to use <App /> in index.js
    export default connect(mapStateToProps)( MainLandingPage );