/** @format */

const GameOver = ({ winner, onRematch }) => {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} , Won!</p>}
      {!winner && <p>It&apos;s Draw!</p>}
      <button onClick={onRematch}>Rematch!</button>
    </div>
  );
};
export default GameOver;
