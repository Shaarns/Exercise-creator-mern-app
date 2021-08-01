import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateExercise = () => {
  const [users, setUser] = useState([]);
  const [value, setValue] = useState({
    username: '',
    duration: '',
    description: '',
    date: '',
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: value.username,
      duration: value.duration,
      description: value.description,
      date: value.date,
    };

    axios
      .post('http://localhost:5000/exercise/add', exercise)
      .then((res) => console.log(res.data))
      .catch((err) => console.log('Error: ', err));

    window.location = '/exercise';
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/user')
      .then((response) => setUser(response.data));
  }, []);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            User name
          </label>
          <select
            name='username'
            onChange={handleChange}
            className='form-control'
            id='exampleFormControlSelect1'
            value={value.username}
          >
            {users.map((user) => {
              return <option>{user.username}</option>;
            })}
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Duration
          </label>
          <input
            onChange={handleChange}
            type='number'
            name='duration'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={value.duration}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Descriptioni
          </label>
          <input
            name='description'
            onChange={handleChange}
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={value.description}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Date
          </label>
          <input
            onChange={handleChange}
            name='date'
            type='Date'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={value.date}
          />
        </div>
        <button className='btn btn-danger'>Submit</button>
      </form>
    </div>
  );
};

export default CreateExercise;
