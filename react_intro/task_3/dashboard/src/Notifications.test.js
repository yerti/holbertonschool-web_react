import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

// Number of List Items
test('Notifications renders three list items', () => {
    const { getAllByRole } = render(<Notifications />);
    const itemsList = getAllByRole('listitem');
    expect(itemsList).toHaveLength(3);
});

// Presence of Specific Text
test('Notifications renders the text Here is the list of notifications', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
})
