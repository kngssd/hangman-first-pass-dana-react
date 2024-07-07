import React, { useState } from "react";
import "./index.css";

export default function Hangman() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const wordsArray = ["cat", "belt", "friday", "consolidation"];
  const randomWord = Math.floor(Math.random() * wordsArray.length);
  const [guessedWord, setGuessedWord] = React.useState(wordsArray[randomWord]);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongLetters, setWrongLetters] = React.useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 10;

  function handleGuess(letter) {
    if (guessedLetters.includes(letter) || wrongGuesses >= maxWrongGuesses)
      return;

    if (guessedWord.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
      setWrongLetters([...wrongLetters, letter]);
    }
  }

  function displayWord() {
    return guessedWord.split("").map((letter, index) => (
      <p key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : "_"}
      </p>
    ));
  }

  function DisplayKeyboard() {
    return alphabet.map((letter, index) => (
      <button
        key={index}
        className="keyboard-list-button"
        onClick={() => handleGuess(letter)}
        disabled={
          guessedLetters.includes(letter) ||
          wrongLetters.includes(letter) ||
          wrongGuesses >= maxWrongGuesses
        }
      >
        {letter}
      </button>
    ));
  }

  const isWinner = guessedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = wrongGuesses >= maxWrongGuesses;

  return (
    <>
      <div className="keyboard-list">
        <h1>Dana&apos;s Hangman Game</h1>
      </div>
      <div className="keyboard-list">{displayWord()}</div>
      <div>{DisplayKeyboard()}</div>
      <div className="keyboard-list">
        {isWinner && <p>Congratulations! You won!</p>}
        {isGameOver && <p>Game Over! The word was: {guessedWord}</p>}
        <p>Wrong Guesses: {wrongGuesses}</p>
      </div>
    </>
  );
}
