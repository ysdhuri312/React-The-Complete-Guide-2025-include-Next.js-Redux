/** @format */

import { useState } from 'react';

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setEnteredName(e.target.value);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <section id='player'>
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type='text' onChange={handleChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
