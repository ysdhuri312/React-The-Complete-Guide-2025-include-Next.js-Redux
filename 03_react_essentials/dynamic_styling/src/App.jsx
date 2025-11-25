/** @format */

import React from 'react';

// don't change the Component name "App"
export default function App() {
  const [style, setStyle] = React.useState();

  function handleSubmit(value) {
    setStyle(value);
  }

  return (
    <div>
      <p className={style ? 'active' : undefined}>Style me!</p>
      <button onClick={() => handleSubmit(true)}>Toggle style</button>
    </div>
  );
}
