import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Demo page imports
import Navbar from './components/exercise/nav-bar';
import ExerciseList from './components/exercise/exercise-list';
import CreateExercise from './components/exercise/create-exercise';
import EditExercise from './components/exercise/edit-exercise';
import CreateUser from './components/exercise/create-user';
import UserList from './components/exercise/UserList';

class App extends React.Component {
  render() {
    return (
      <section>
        <Navbar />
        <Router>
          <Route path='/exercise'>
            <ExerciseList />
          </Route>
          <Route path='/edit/:id' component={EditExercise}></Route>
          <Route path='/create'>
            <CreateExercise />
          </Route>
          <Route path='/user'>
            <CreateUser />
          </Route>
          <Route path='/userlist'>
            <UserList />
          </Route>
        </Router>
      </section>
    );
  }
}
export default App;
