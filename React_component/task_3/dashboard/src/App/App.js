import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notification from '../Notifications/Notifications'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
class App extends Component {
  constructor(props) {
    super(props);

    // array de cursos
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    // array de notificaciones
    this.state = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: 'Custom notification with HTML' } },
      ],
    };
  }

  static defaultProps = {
    logOut: () => {
    },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // evito por defecto el comportamiendo de ctrl + h que nos envia al historia
    event.preventDefault();

    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listNotifications } = this.state;
    let title = isLoggedIn ? 'Course list': 'Log in to continue'

    return (
      <div className="App">
        <div className='content-header'>
          <Notification displayDrawer listNotifications={listNotifications} />
          <Header />
        </div>
        <div className='App-body'>
          {/* Wrap CourseList or Login with BodySectionWithMarginBottom based on isLoggedIn */}
          <BodySectionWithMarginBottom title={title}>
            {isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          </BodySectionWithMarginBottom>

          {/* Add a new block with the title News from the School */}
          <BodySection title='News from the School'>
            <p>Some random text about the latest news from the school.</p>
          </BodySection>
        </div>

        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}


App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};


export default App;