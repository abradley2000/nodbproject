import React, {Component} from 'react';
import Starter from './Components/Starter';
import Header from './Components/Header';
import Enemy from './Components/Enemy';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Starter/>
        <Enemy/>
      </div>
    );
  }
}

export default App;