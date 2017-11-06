import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/workouts" activeClassName="active">Workouts</Link>
      {" | "}
      <Link to="/workout" activeClassName="active">New Workout</Link>
      {" | "}
      <Link to="/new-exercise" activeClassName="active">New Exercise</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
