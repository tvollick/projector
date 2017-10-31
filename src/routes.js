import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WorkoutsPage from './components/workout/WorkoutsPage';
import CreateWorkoutPage from  './components/workout/CreateWorkoutPage';
import CreateExercisePage from './components/exercise/CreateExercisePage'; 
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="workouts" component={WorkoutsPage} />
    <Route path="new-workout" component={CreateWorkoutPage} />
    <Route path="new-exercise" component={CreateExercisePage} />
  </Route>
);
