/**
 * Finally, if we only want to mock some of the methods but not all of them, we can use the jest.requireActual
 * method to include the actual module exports in our test file. For example, here we mock the method3 function 
 * but not the method1 or method2 functions:
 */

const {method1, method2, method3} = require('./utils')

jest.mock('./utils', () => {
  return {
    ...jest.requireActual('./utils'),
    method3: jest.fn().mockImplementation(() => 'You have called a mocked method 3!'),
  }
});

describe('name exports - partially mocked file', () => {
  it('returns the correct value for method 1', () => {
    expect(method1()).toBe('You have called Method 1')
  })
  it('returns the correct value for method 2', () => {
    expect(method2()).toBe('You have called Method 2')
  })
  it('returns the correct value for method 3', () => {
    expect(method3()).toBe('You have called a mocked method 3!')
  })
})