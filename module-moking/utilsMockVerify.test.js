/*
  If we wanted to mock these methods using automatic mocking, we could simply
  pass the file path to the jest.mock method.

  Note: In these examples, we are going to be writing tests to verify that the
  mocking behavior is working properly. These are somewhat “meta” tests, in that
  you probably wouldn’t need to be testing that Jest is behaving properly. In a
  real testing scenario, you’d likely be mocking one module that is consumed by
  a second module, where the methods from the first module aren’t relevant to
  what you’re trying to test in the second module.

  You can see that for each method, the real return value is replaced by an 
  undefined return value. That’s because we automatically mocked the module
  using this statement: jest.mock('./utils.js')
*/

const {method1, method2, method3} = require('./utils')

jest.mock('./utils');

describe('name exports - automatically mocked file with no return values', () => {
  it('returns the correct value for method 1', () => {
    expect(method1()).not.toBe('You have called Method 1')
    expect(method1()).toBe(undefined)
  })
  it('returns the correct value for method 2', () => {
    expect(method2()).not.toBe('You have called Method 2')
    expect(method2()).toBe(undefined)
  })
  it('returns the correct value for method 3', () => {
    expect(method3()).not.toBe('You have called Method 3')
    expect(method3()).toBe(undefined)
  })

})