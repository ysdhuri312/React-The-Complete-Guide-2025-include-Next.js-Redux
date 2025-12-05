/** @format */

import { useState } from 'react';

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(value) {
    setPlayerName(value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {!isEditing ? (
          <span className='player-name'>{playerName}</span>
        ) : (
          <input
            type='text'
            onChange={(e) => handleChange(e.target.value)}
            value={playerName}
            required
          />
        )}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
};
export default Player;
