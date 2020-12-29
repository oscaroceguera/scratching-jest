const {promisify} = require('./promises')

it('resolves promise if a result is returned', () => {
  const exec = jest.fn(cb => cb(null, 'foo'))
  expect(promisify({exec})).resolves.toEqual('foo')
})

it('rejects promise if an error happens', () => {
  const exec = jest.fn(cb => cb('error'))
  expect(promisify({exec})).rejects.toEqual('error')
})