/** @format */

import { useState } from 'react';
import styled from 'styled-components';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const Button = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #3d70cfff;
    border-radius: 6px;
    border: none;
  `;

  return (
    <div id='auth-inputs'>
      <div className='controls'>
        <p>
          <label className={emailNotValid ? 'invalid' : undefined}>Email</label>
          <input
            type='email'
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={passwordNotValid ? 'invalid' : undefined}>
            Password
          </label>
          <input
            type='password'
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className='actions'>
        <Button type='button' className='text-button'>
          Create a new account
        </Button>
        <Button className='button' onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
