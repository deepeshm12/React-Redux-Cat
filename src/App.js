import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

class App extends React.Component {  
  render() {
    return (

      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    

    );
  }
}

App.propTypes = {  
  children: PropTypes.object.isRequired
};

export default App;
