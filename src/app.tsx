import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Square from './components/Square'
import Board from './components/Board'

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">

      </div>
    </div>
  );
}

const root = createRoot(document.body);
root.render(<Game />);