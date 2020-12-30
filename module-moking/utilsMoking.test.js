/**
 * Now, what if we wanted more control over how each method is mocked? In that case,
 * we can use the jest.mock method along with a module factory method like so:
 * 
 * As you can see, we now have explicitly set what each of our mocked methods should
 * do. They return the value we’ve set them to. However, these are not true mock 
 * functions or “spies” yet, because we can’t spy on things like whether or not any 
 * given function has been called.
 */

const {method1, method2, method3} = require('./utils')

jest.mock('./utils', () => {
  return {
    method1: () => 'You have called a mocked method 1!',
    method2: () => 'You have called a mocked method 2!',
    method3: () => 'You have called a mocked method 3!',
  }
});

describe('name exports - module factory mocked file', () => {
  it('returns the correct value for method 1', () => {
    expect(method1()).toBe('You have called a mocked method 1!')
    expect(() => expect(method1).toHaveBeenCalledTimes(1)).toThrow()
  })
  it('returns the correct value for method 2', () => {
    expect(method2()).toBe('You have called a mocked method 2!')
    expect(() => expect(method2).toHaveBeenCalledTimes(1)).toThrow()
  })
  it('returns the correct value for method 3', () => {
    expect(method3()).toBe('You have called a mocked method 3!')
    expect(() => expect(method3).toHaveBeenCalledTimes(1)).toThrow()
  })

})