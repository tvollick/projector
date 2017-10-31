import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const config = {
  apiKey: "AIzaSyBRRJ4eYr5mqnFX0ASaudspk1wxbBIzdrA",
  authDomain: "projector-96013.firebaseapp.com",
  databaseURL: "https://projector-96013.firebaseio.com",
  projectId: "projector-96013",
  storageBucket: "projector-96013.appspot.com",
  messagingSenderId: "946650560997"
};

// import * as firebase from 'firebase';
//
// firebase.initializeApp(config);

// const db = firebase.database();
// const dbRef = db.ref().child('data');
//
// dbRef.on('value', snapshot => {
//   this.setState({
//     data: snapshot.val()
//   });
// });

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
