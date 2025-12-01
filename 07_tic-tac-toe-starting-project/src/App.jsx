/** @format */

import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <main id='game-container'>
      <span id='players'>
        <Player name={'Player1'} symbol={'X'} />
        <Player name={'Player2'} symbol={'0'} />
      </span>
      <GameBoard />
    </main>
  );
}

export default App;
