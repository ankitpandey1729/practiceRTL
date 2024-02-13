import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MyForm from '../components/MyForm';

test('renders all form fields', () => {
  render(<MyForm />);

  // Check if all form fields are rendered

  //getByRole : you've to define role.
  const inputRadioOption1 = screen.getByRole('radioOption1');
  expect(inputRadioOption1).toBeInTheDocument();

  //alternate way
  expect(screen.getByPlaceholderText(/Enter text.../)).toBeInTheDocument();
  expect(screen.getByText(/Select an option/)).toBeInTheDocument();
  expect(screen.getByText(/Checkbox/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Radio Option 1/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Radio Option 2/)).toBeInTheDocument();
  expect(screen.getByText(/Click Me!/)).toBeInTheDocument();
  
});

test('triggers alert on button click', () => {
  render(<MyForm />);
  window.alert = jest.fn();
  // Trigger button click

  fireEvent.click(screen.getByText(/Click Me!/));

  // Check if alert was called
  expect(window.alert).toHaveBeenCalledWith('Button Clicked!');
});

test('updates state on textarea change', () => {
  render(<MyForm />);

  // Trigger textarea change
  fireEvent.change(screen.getByPlaceholderText(/Enter text.../), {
    target: { value: 'Updated Text' },
  });

  // Check if state is updated
  expect(screen.getByPlaceholderText(/Enter text.../).value).toBe('Updated Text');
});

test('updates state on select change', () => {
  render(<MyForm />);
  //screen.debug();
  // Trigger select change
  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'option1' },
  });
  //screen.debug();
  // Check if state is updated
  expect(screen.getByRole('combobox').value).toBe('option1');
});

test('updates state on checkbox change', () => {
  render(<MyForm />);

  // Trigger checkbox change
  fireEvent.click(screen.getByLabelText(/Checkbox/));

  // Check if state is updated
  expect(screen.getByLabelText(/Checkbox/).checked).toBe(true);
});

test('updates state on radio change', () => {
  render(<MyForm />);

  // Trigger radio change
  fireEvent.click(screen.getByLabelText(/Radio Option 2/));

  // Check if state is updated
  expect(screen.getByLabelText(/Radio Option 2/).checked).toBe(true);
});

// getBy* (most commonly used)
// queryBy* (used when testing the absence of an element without throwing an error)
// findBy* (used when testing asynchronous code)

//https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
//https://www.digitalocean.com/community/tutorials/how-to-write-snapshot-tests-for-react-components-with-jest
