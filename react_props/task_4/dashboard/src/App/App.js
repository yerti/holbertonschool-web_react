import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notification from '../Notifications/Notifications'

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <div className='content-header'>
        <Notification displayDrawer />
        <Header />
      </div>
      <div className='App-body'>
        {isLoggedIn ? <CourseList /> : <Login />}
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