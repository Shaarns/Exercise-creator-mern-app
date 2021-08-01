import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Exercise from './Exercise';

const ExerciseList = () => {
  const [users, setUsers] = useState({ exercise: [] });
  const [loader, setLoader] = useState(true);

  const handleDeleteEXercise = (id) => {
    axios.delete('http://localhost:5000/exercise/' + id).then((response) => {
      console.log('Deleted');
    });
    setUsers({
      exercise: users.exercise.filter((remove_user) => remove_user._id !== id),
    });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/exercise/').then((response) => {
      setUsers({ exercise: response.data });
    });
    setLoader(false);
  }, []);

  return (
    <table className='container table'>
      <thead>
        <tr>
          <th scope='col'>User Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Duration</th>
          <th scope='col'>Date</th>
          <th scope='col'>Operation</th>
        </tr>
      </thead>
      <tbody>
        {users.exercise.map((exercise) => {
          return (
            <Exercise
              key={exercise._id}
              exercise={exercise}
              handleDelete={handleDeleteEXercise}
              loader={loader}
              // handleEdit={handleEditExercise}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ExerciseList;
