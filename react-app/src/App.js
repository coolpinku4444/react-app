import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Sidebar from './components/sidebar'
class App extends Component {
  render() {
    return (
      <div>
           <Header />
            <Sidebar />
      </div>
     
    );
  }
}

export default App;
