const { iteratee } = require("lodash");

it('returns undefinded and has benn called correct number of times', () => {
  const mock = jest.fn()

  const result = mock()

  expect(result).toBeUndefined()
  expect(mock).toHaveBeenCalledTimes(1)
  expect(mock).toHaveBeenCalledWith()
})
it('has been called with correct arguments and returns a correct value', () => {
  const mock = jest
    .fn()
    .mockReturnValueOnce('first return')
    .mockReturnValueOnce('second return')

  const resultFirst = mock('first call')
  const resultSecond = mock('second call')

  expect(resultFirst).toBe('first return')
  expect(resultSecond).toBe('second return')
  expect(mock).toHaveBeenCalledTimes(2)
  expect(mock).toHaveBeenNthCalledWith(1, 'first call')
  expect(mock).toHaveBeenNthCalledWith(2, 'second call')

})

