import reportWebVitals from '../reportWebVitals';
import 'web-vitals';

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

describe('reportWebVitals', () => {
  test('calls web-vitals functions with onPerfEntry callback', () => {
    const onPerfEntry = jest.fn();
    reportWebVitals(onPerfEntry);

    // Ensure that each web-vitals function is called with onPerfEntry
    expect(require('web-vitals').getCLS).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getFID).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getFCP).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getLCP).toHaveBeenCalledWith(onPerfEntry);
    expect(webVitals.getTTFB).toHaveBeenCalledWith(onPerfEntry);
  });

  test('does not call web-vitals functions if onPerfEntry is not provided', () => {
    reportWebVitals();

    // Ensure that no web-vitals function is called
    expect(webVitals.getCLS).not.toHaveBeenCalled();
    expect(webVitals.getFID).not.toHaveBeenCalled();
    expect(webVitals.getFCP).not.toHaveBeenCalled();
    expect(webVitals.getLCP).not.toHaveBeenCalled();
    expect(webVitals.getTTFB).not.toHaveBeenCalled();
  });
});
