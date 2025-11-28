/** @format */

// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();
import React from 'react';

export default function App() {
  const [discount, setDisount] = React.useState('$100');

  function handleSubmit(value) {
    setDisount(value);
  }

  return (
    <div>
      <p data-testid='price'>{discount}</p>
      <button onClick={() => handleSubmit('$75')}>Apply Discount</button>
    </div>
  );
}
