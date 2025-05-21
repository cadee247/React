import React, { Component } from 'react';

class Nicknames extends Component {
  render() {
    let nicknames = ['Cadee', 'kd', 'cads', 'Cece'];

    let nicknameLoop = nicknames.map((name, index) => (
      <li key={index}>{name}</li> 
    ));

    return (
      <div>
        <h1>Nicknames</h1>
        <ul>{nicknameLoop}</ul> 
      </div>
    );
  }
}

export default Nicknames;