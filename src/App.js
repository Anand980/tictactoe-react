import React from 'react';
import './style.css';
import TicTacToe from './components/TicTacToe';

export default function App() {
  return (
    <div>
      <TicTacToe size={3} />
    </div>
  );
}
