/**
 * If we wanted to be able to spy on each of our mocked functions, then we’d need to use
 * the module factory along with a mock implementation for each function like this:
 * 
 * As you can see, by utilizing the jest.fn() method to create a mock function and then
 * defining its implementation using the mockImplementation method, we can control what 
 * the function does and spy on it to see how many times it was called.
 */

const {method1, method2, method3} = require('./utils')

jest.mock('./utils', () => {
  return {
    method1: jest.fn().mockImplementation(() => 'You have called a mocked method 1!'),
    method2: jest.fn().mockImplementation(() => 'You have called a mocked method 2!'),
    method3: jest.fn().mockImplementation(() => 'You have called a mocked method 3!'),
  }
});

describe('name exports - module factory with mock implementation mocked file', () => {
  it('returns the correct value for method 1', () => {
    expect(method1()).toBe('You have called a mocked method 1!')
    expect(method1).toHaveBeenCalledTimes(1)
  })
  it('returns the correct value for method 2', () => {
    expect(method2()).toBe('You have called a mocked method 2!')
    expect(method2).toHaveBeenCalledTimes(1)
  })
  it('returns the correct value for method 3', () => {
    expect(method3()).toBe('You have called a mocked method 3!')
    expect(method3).toHaveBeenCalledTimes(1)
  })

})