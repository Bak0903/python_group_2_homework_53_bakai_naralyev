import React, { Component } from 'react';
import './App.css';
import Lotto from "./Lotto/Lotto.js";

function compareNumeric(a, b) {
  return a - b;
}

function lottoCombination() {
    let combo = [];
    for (let i = 0; i < 5; i++) {
        combo[i] = Math.floor(Math.random() * 28) + 5
    }
    console.log(combo);
    combo.sort(compareNumeric);
    console.log(combo);
    return combo;
}


class App extends Component {

    state = {numbers: lottoCombination()};

    newCombo = () => {
        console.log('Кнопка нажата');
        let newState = {...this.state};
        newState.numbers = lottoCombination();
        this.setState(newState)
    };

  render() {
    return (
      <div className="App">
            <button className={'btn'} onClick={() =>(this.newCombo())}>New numbers</button>
          <Lotto combo = {this.state}/>
      </div>
    );
  }
}

export default App;
