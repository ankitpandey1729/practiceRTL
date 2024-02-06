// MyComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

test('renders hello message', () => {
  const { getByText } = render(<MyComponent />);
  const helloElement = getByText(/hello, jest/i);
  expect(helloElement).toBeInTheDocument();
});
