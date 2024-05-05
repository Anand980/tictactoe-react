import React, { useState, useEffect } from 'react';

export default function TicTacToe({ size }) {
  const initarr = Array.from({ length: size * size }).fill(null);
  const [isXTurn, setIsXTurn] = useState(true);
  const [arr, setArr] = useState(initarr);
  const [winner, setWinner] = useState('');
  console.log(arr);

  const winPatter = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const reset = () => {
    setArr(initarr);
    setIsXTurn(true);
    setWinner('');
  };

  const calWinner = (arr) => {
    let winner = '';
    winPatter.forEach((pattern) => {
      const [a, b, c] = pattern;
      if (arr[a] != null && arr[a] === arr[b] && arr[b] === arr[c]) {
        console.log(arr[a]);
        winner = arr[a];
      }
    });
    return winner;
  };

  const handleClick = (index) => {
    console.log(index);
    if (arr[index] == null) {
      const updateArr = [...arr];
      updateArr[index] = isXTurn ? 'X' : 'O';

      setArr(updateArr);
      setIsXTurn(!isXTurn);
      const isWinner = calWinner(updateArr);
      console.log(isWinner);
      if (isWinner !== '') {
        console.log('set winner');
        setWinner(isWinner);
      }
    }
  };

  return (
    <>
      <span>winner: {winner}</span>
      <br />

      <div
        className="game-div"
        style={{ 'grid-template-columns': 'auto '.repeat(size) }}
      >
        {arr.map((val, index) => (
          <button
            key={index}
            className="game-btn"
            onClick={() => handleClick(index)}
            disabled={winner === '' ? false : true}
          >
            {val}
          </button>
        ))}
      </div>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
