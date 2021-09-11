import React, { Component } from 'react';

import gameFactory from './game-state-factory';
import { GAME_WON, GAME_STARTED, GAME_OVER } from './game-states';
import Game from './Game';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onLetterClick = this.onLetterClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);

    // Random word and new game state data
    this.state = gameFactory.newGame();
  }

  render() {
    const gameProps = {
      onLetterClick: this.onLetterClick,
      onRestartClick: this.onRestartClick,
      ...this.state
    };

    return (
      <div className="App">
        <Game {...gameProps} />
      </div>
    );
  }

  onLetterClick(letter, e) {
    e.preventDefault();

    const firstIndex = this.state.word.indexOf(letter);
    console.log('firstIndex: ',firstIndex);
    if (firstIndex !== -1) {
      const letters = this.state.letters.map(letterObject => {
        if (letterObject.value === letter) {
          return Object.assign({}, letterObject, {
            guessed: true,
          });
        }

        return letterObject;
      });

      const gameWon = letters.reduce((winState, currentObject) => {
        return winState && currentObject.guessed;
      }, true);

      this.setState((prevState, props) => {
        return {
          letters,
          pastGuesses: [letter].concat(prevState.pastGuesses),
          gameState: gameWon ? GAME_WON : GAME_STARTED,
        };
      });
    } else {
      this.setState((prevState, props) => {
        const guessesLeft = prevState.guesses - 1;
        let stateUpdate = {
          guesses: guessesLeft,
        };

        if (guessesLeft === 0) {
          stateUpdate.gameState = GAME_OVER;
        }

        stateUpdate.pastGuesses = [letter].concat(prevState.pastGuesses);

        return stateUpdate;
      });
    }
  }

  onRestartClick(e) {
    e.preventDefault();

    this.setState(gameFactory.newGame());
  }
}

export default App;
