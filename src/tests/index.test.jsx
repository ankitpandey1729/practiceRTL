import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.js';
import { act } from 'react-dom/test-utils';

// Mock the reportWebVitals function
jest.mock('../reportWebVitals.js', () => jest.fn());

test('App renders within a root', () => {
  // Arrange
  const rootMock = {
    render: jest.fn()
  };

  // Mock the createRoot method of ReactDOM
  const createRootMock = jest.spyOn(ReactDOM, 'createRoot').mockReturnValue(rootMock);
  // Act
  act(() => {
    require('../index.js'); // Import the index.tsx file containing the rendering logic
  });

  // Assert
  expect(createRootMock).toHaveBeenCalledTimes(1);
  expect(createRootMock).toHaveBeenCalledWith(expect.any(Object)); // Ensure it's called with a DOM element
  expect(rootMock.render).toHaveBeenCalledTimes(1);
  expect(rootMock.render).toHaveBeenCalledWith(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
