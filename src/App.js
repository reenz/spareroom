import React, {Component} from 'react';
import logo from './logo.png';
import NavBar from './components/Navbar.js'
import './App.css';
import getData from './helper/GetEventData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: null
    }
  }

  getEvent(event) {
    this.setState({eventData: getData()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div>
          <NavBar onClick={this.getEvent()} eventData={this.state.eventData} />
        </div>
      </div>
    );
  }
}

export default App;