import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditExercise = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    duration: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/exercise/' + props.match.params.id)
      .then((response) => {
        console.log(response);
        setUser({
          username: response.data.username,
          duration: response.data.duration,
          description: response.data.description,
          date: response.data.date.substring(0, 10),
        });
        // setIsLoading(true);
      });
    // axios.get('http://localhost:5000/user/').then((response) => {
    //   if (response.data.length > 0)
    //     setUser({ users: response.data.map((user) => user.username) });
    // });
    // .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: user.username,
      duration: user.duration,
      description: user.description,
      date: new Date(user.date),
    };

    axios
      .post(
        'http://localhost:5000/exercise/update/' + props.match.params.id,
        exercise
      )
      .then((response) => console.log(response))
      .catch((Err) => console.log('Error' + Err));
    window.location = '/exercise';
  };

  console.log(user);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            User name
          </label>
          <select
            name='username'
            className='form-control'
            id='exampleFormControlSelect1'
            value={user.username}
          >
            <option>{user.username}</option>
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
            value={user.duration}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Description
          </label>
          <input
            name='description'
            onChange={handleChange}
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            value={user.description}
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
            value={user.date}
          />
        </div>
        <button className='btn btn-danger'>Submit</button>
      </form>
    </div>
  );
};

export default EditExercise;
