import {mult, sum} from './01';

let a: number;
let b: number;

beforeEach( () => {
  a = 1;
  b = 2;
})
test('sum should add numbers', () => {
  a = 100

  //action
  const result = sum(a,b)

  //expected result
  expect(result).toBe(102)
})

test('mult should multiply numbers', () => {
  const res = mult(a,b)

  expect(res).toBe(2)
})
