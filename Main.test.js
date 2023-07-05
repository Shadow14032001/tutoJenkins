import {test} from jest;
const helloWorld = require('./helloWorld');

test('Greet test', () => {
  expect(helloWorld()).toBe('Hello World!');
})
