const {returnOnError} = require('./first')

test('returns the result if no error was thrown', () => {
  expect(returnOnError(() => 'foo', 'bar')).toEqual('foo')
})

test('returns the alternative if an error was thrown', () => {
  expect(returnOnError(() => {throw 'Foo'}, 'bar')).toEqual('bar');
})