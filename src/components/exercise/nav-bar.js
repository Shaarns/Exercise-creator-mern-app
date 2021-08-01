import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <a className='navbar-brand' href='/exercise'>
          Navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-2 mb-2 mb-lg-2'>
            <li className='nav-item'>
              <a className='nav-link ' aria-current='page' href='/exercise'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link ' aria-current='page' href='/create'>
                Create Exercise
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/user'>
                Create User
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/userlist'>
                Delete User
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
