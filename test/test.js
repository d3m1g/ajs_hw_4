import { healthBarColor } from '../src/index.js'
import { heroes, filter } from '../src/filter.js'

describe("healthBarColor", () => {
 test('critical', () => {
  healthBarColor('Маг', 14)
  expect('critical').toBe('critical');
 });

 test('wounded', () => {
  healthBarColor('Маг', 40)
  expect('wounded').toBe('wounded');
 });

 test('healthy', () => {
  healthBarColor('Маг', 80)
  expect('healthy').toBe('healthy');
 });
})

describe("Heroes filter", () => {
 test('Heroes filter', () => {
  const toEqual = [
   { name: 'маг', health: 100 },
   { name: 'лучник', health: 80 },
   { name: 'мечник', health: 10 },
  ];
  expect(filter(heroes)).toEqual(toEqual);
 })
})