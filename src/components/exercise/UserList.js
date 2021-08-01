import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import axios from 'axios';

const Users = (props) => {
  return (
    <tr>
      <td>{props.user.username}</td>
      <td>
        <button onClick={() => props.deleteUser(props.user._id)}>Delete</button>
      </td>
    </tr>
  );
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/user/').then((response) => {
      setUsers(response.data);
      setLoading(true);
      console.log(response);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/user/' + id).then((response) => {
      console.log('User Deleted!');
    });
    setUsers(users.filter((user) => user._id !== id));
  };

  if (loading) {
    return (
      <div>
        <table className='container  table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Users user={user} deleteUser={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <Loader />
    </div>
  );
};

export default UserList;
