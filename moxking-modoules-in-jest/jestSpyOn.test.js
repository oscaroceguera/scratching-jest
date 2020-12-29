const helpers = require('./jestSpyOn')

it('returns correct result', () => {
  const addMock = jest.spyOn(helpers, 'add')

  const result = addMock(1, 2)

  expect(result).toBe(3)
})
it('returns mocked and original result', () => {
  const addMock = jest.spyOn(helpers, 'add')
  addMock.mockImplementation(() => 4)
  
  // redefined implementation
  expect(helpers.add()).toBe(4)

  addMock.mockRestore()

  // original implementation
  expect(helpers.add(1, 2)).toBe(3)
})


it('mocks entire module', () => {
  helpers.add = jest.fn()
  helpers.sub = jest.fn()

  expect(helpers.add.mock).toBeTruthy()
  expect(helpers.sub.mock).toBeTruthy()
})