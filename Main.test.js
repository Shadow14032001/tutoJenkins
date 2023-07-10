// const test = require('jest');
const helloWorld = require('./Main');
// const helloWorld = require(helloWorld);

test('Greet test', () => {
  const hello = helloWorld()
  expect(hello).toBe('Hello World!');
})
