import randomWord from './random-word';
import { GAME_STARTED } from './game-states';

export default {
  newGame: () => {
    const {word:gameWord, question} = randomWord();
    return {
      word: gameWord,
      letters: gameWord.split('').map(letter => ({
        value: letter.toLowerCase(),
        guessed: false,
      })),
      question: question,
      guesses: 5,
      gameState: GAME_STARTED,
      pastGuesses: [],
    };
  }
}
