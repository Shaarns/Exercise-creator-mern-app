import React, { useState, useEffect } from 'react';
import Prompt from './Prompt';
import axios from 'axios';

const CreateUser = () => {
  const [displayPrompt, setDisplayPrompt] = useState(false);
  const [users, setUsers] = useState({ username: '' });
  const handleChange = (e) => {
    setUsers(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username: users };
    console.log(user);

    axios
      .post('http://localhost:5000/user/add', user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('Error: ', err));

    setUsers({ username: '' });
    setDisplayPrompt(true);
  };

  useEffect(() => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setDisplayPrompt(false);
    }, 2000);
  }, [users]);

  return (
    <div className='container'>
      {displayPrompt && <Prompt />}
      <form method='POST' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            User name
          </label>
          <input
            type='username'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            onChange={handleChange}
            value={users.username}
          />
        </div>
        <button
          className='btn btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
