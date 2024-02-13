import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyCounter from '../components/MyCounter';
import userEvent from '@testing-library/user-event';

let container;
describe('testing mycounter component.',() => {
    beforeEach(() => {
        //console.log("before each.")
        container = render(<MyCounter />);
      });
      
      afterEach(() => {
        //console.log("after each.")
        container = null;
      });
      
      beforeAll(() => {
        //console.log("before all test case done. run once.")
      });
      
      afterAll(() => {
        //console.log("after all test case done. run once.")
      });
      
      test('initial count is zero', () => {
        expect(container.getByText(/count:/i).textContent).toBe('Count: 0');
      });
      
      test('increment button increases count', () => {
        fireEvent.click(container.getByText(/increment/i));
        fireEvent.click(container.getByText(/increment/i));
        // userEvent.click();
        expect(container.getByText(/count:/i).textContent).toBe('Count: 2');
      });
      
      test('decrement button decreases count', () => {
        fireEvent.click(container.getByText(/decrement/i));
        expect(container.getByText(/count:/i).textContent).toBe('Count: -1');
      });
});

