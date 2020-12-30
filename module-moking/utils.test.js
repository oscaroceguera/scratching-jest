const {method1, method2, method3} = require('./utils')

describe('name exports - unmoked file', () => {
  it('return the correct value for method 1', () => {
    expect(method1()).toBe('You have called Method 1')
  })
  it('return the correct value for method 2', () => {
    expect(method2()).toBe('You have called Method 2')
  })
  it('return the correct value for method 3', () => {
    expect(method3()).toBe('You have called Method 3')
  })
})