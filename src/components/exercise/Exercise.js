import React from 'react';

const Exercise = (props) => {
  return (
    <>
      {props.loader ? (
        <div>
          <div className='loader' />
        </div>
      ) : (
        <tr>
          <td>{props.exercise.username}</td>
          <td>{props.exercise.description}</td>
          <td>{props.exercise.duration} minutes</td>
          <td>{props.exercise.date.substring(0, 10)}</td>
          <td>
            <a className='btn btn-danger' href={'/edit/' + props.exercise._id}>
              Edit
            </a>
            |
            <button
              className='btn btn-danger'
              onClick={() => props.handleDelete(props.exercise._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default Exercise;
