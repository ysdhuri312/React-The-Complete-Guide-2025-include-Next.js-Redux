/** @format */

import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
  }

  return (
    <main id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player name={'Player1'} symbol={'X'} isActive={activePlayer === 'X'} />
        <Player name={'Player2'} symbol={'O'} isActive={activePlayer === 'O'} />
      </ol>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
    </main>
  );
}

export default App;
