import React, {Component} from 'react';
import logo from './logo.png';
import NavBar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div>
          <NavBar/>
        </div>
      </div>
    );
  }
}

export default App;