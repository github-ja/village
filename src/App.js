import React, { Component } from 'react';
import Profile from './components/villager-profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="intro">
          Your Village
        </h1>
        <Profile
          name='Anthony Jackson'
          img='https://www.n2c0500.com/sites/default/files/styles/thumbnail/public/pictures/2018-03/Portrait-Male-Collared-Shirt-Placeholder-Image.jpg'
        />
        <Profile
          name='Anne Williams'
          img='https://s3.amazonaws.com/twenty28/sites/166676d6-e91b-11e4-8ed1-6a13df3711dd/headshots/2933/1523897780954/placeholder_female1-thumb.jpg'
        />
        <Profile
          name='Craig Hansard'
          img='https://www.n2c0500.com/sites/default/files/styles/thumbnail/public/pictures/2018-03/Portrait-Male-Collared-Shirt-Placeholder-Image.jpg'
        />
      </div>
    );
  }
}

export default App;
