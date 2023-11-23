import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

// App component renders without crashing
test('App component renders without crashing', () => {
    render(<App />);
});

// App component renders a div element with the App-header class
test('App renders a div with the class App-header', () => {
    const { getByTestId } = render(<App />);
    const elementHeader = getByTestId('App-header');
    expect(elementHeader).toBeInTheDocument();
});

// App component renders a div element with App-body class
test('App renders a div with the class App-body', () => {
    const { getByTestId } = render(<App />);
    const bodyElement = getByTestId('App-body');
    expect(bodyElement).toBeInTheDocument();
});

// App component renders a div element with App-footer class
test('App renders a div with the class App-footer', () => {
    const { getByTestId } = render(<App />);
    const footerElement = getByTestId('App-footer');
    expect(footerElement).toBeInTheDocument();
});
