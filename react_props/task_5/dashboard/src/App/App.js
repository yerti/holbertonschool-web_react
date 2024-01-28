import React, { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notification from '../Notifications/Notifications'

function App({ isLoggedIn }) {
  // array de cursos 
  const listCourses = [
    {id: 1, name:'ES6', credit: 60},
    {id: 2, name:'Webpack', credit: 20 },
    {id: 3, name:'React', credit: 40},
  ];

  // array de notificaciones
  const [listNotifications, setLisNotifiactions] = useState([
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html:{__html: 'Custom notification with HTML'}},
  ])

  return (
    <div className="App">
      <div className='content-header'>
        <Notification displayDrawer listNotifications={listNotifications} />
        <Header />
      </div>
      <div className='App-body'>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>

      <div className='App-footer'>
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;