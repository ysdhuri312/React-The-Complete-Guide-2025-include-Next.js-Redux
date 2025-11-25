/** @format */

import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  const [ui, setUi] = React.useState();

  const content = (
    <div data-testid='alert' id='alert'>
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button>Proceed</button>
    </div>
  );

  function handleSubmit() {
    setUi(content);
  }

  function handleSubmit2() {
    setUi(null);
  }

  return (
    <div>
      {ui && (
        <div data-testid='alert' id='alert'>
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => handleSubmit2()}>Proceed</button>
        </div>
      )}

      <button onClick={() => handleSubmit()}>Delete</button>
    </div>
  );
}
