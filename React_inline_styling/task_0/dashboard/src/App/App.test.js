import React from 'react';
import { render, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  beforeEach(() => {
    // Mock the window object
    global.window = {};
    global.document = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
    global.alert = jest.fn();
  });

  afterEach(() => {
    // Clean up the mock environment
    global.window = undefined;
    global.document = undefined;
    global.alert.mockRestore();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    const appComponent = wrapper.find('.App');
    expect(appComponent.length).toBe(1);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('does not contain the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('does not contain the Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} listCourses={[]} />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('contains the CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} listCourses={[]} />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={false} listCourses={[]} />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('calls logOut and triggers alert on "ctrl + h" key press', () => {
    const mockLogOut = jest.fn();
    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    
    // Simula el evento 'keydown' con 'ctrl + h'
    const event = {
      key: 'h',
      ctrlKey: true,
    };
  
    global.document.dispatchEvent(new Event('keydown', event));

    // Espera que se haya llamado a la función logOut
    expect(mockLogOut).toHaveBeenCalled();

    // Espera que alert se haya llamado con el mensaje esperado
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });

});

