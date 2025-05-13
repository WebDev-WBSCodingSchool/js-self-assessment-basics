import { test, expect } from '@playwright/test';
import {
  createVariables,
  myNumber as mN,
  myObject as mO,
  myString as mS,
  myArray as mA,
  divide,
  canRideBigRollerCoaster,
  calculate,
  logIceCreamOrders,
  countTypes,
} from '../src/studentFunctions.js';

test.describe('createVariables()', () => {
  test.skip(createVariables() === 'NOT IMPLEMENTED', 'createVariables() is not implemented');

  test('returns Number', () => {
    const { myNumber } = createVariables();
    expect(myNumber).not.toBe(mN);
    expect(typeof myNumber).toBe('number');
  });

  test('returns String', () => {
    const { myString } = createVariables();
    expect(myString).not.toBe(mS);
    expect(typeof myString).toBe('string');
  });

  test('returns Array', () => {
    const { myArray } = createVariables();
    expect(myArray).not.toEqual(mA);
    expect(myArray).toBeInstanceOf(Array);
  });

  test('returns Object', () => {
    const { myObject } = createVariables();
    expect(myObject).not.toEqual(mO);
    expect(myObject).toBeInstanceOf(Object);
  });
});

test.describe('divide()', () => {
  test.skip(divide(2, 2) === 'NOT IMPLEMENTED', 'divide() is not implemented');
  const cases = [
    [42, 2, 21],
    [10, 5, 2],
    [145378304000, 283942, 512000],
    [145378304000, 0, 'Division by Zero'],
  ];

  for (const [a, b, expected] of cases) {
    test(`divide(${a}, ${b}) -> ${expected}`, () => {
      expect(divide(a, b)).toBe(expected);
    });
  }
});

test.describe('canRideBigRollerCoaster()', () => {
  test.skip(canRideBigRollerCoaster(122) === 'NOT IMPLEMENTED', 'canRideBigRollerCoaster() is not implemented');

  const cases = [
    [122, true],
    [123, true],
    [121, false],
    ['Not a number', undefined],
    [true, undefined],
    [{}, undefined],
  ];

  for (const [a, expected] of cases) {
    test(`canRideBigRollerCoaster(${a}) -> ${expected}`, () => {
      expect(canRideBigRollerCoaster(a), `Supposed ${a} to result in "${expected}"`).toBe(expected);
    });
  }
});

test.describe('calculate()', () => {
  test.skip(calculate(42, 2, '+') === 'NOT IMPLEMENTED', 'calculate() is not implemented');
  const cases = [
    [42, 2, '+', 44],
    [42, 2, '-', 40],
    [42, 2, '*', 84],
    [42, 2, '/', 21],
    [42, 2, 'bullshit', undefined],
    [42, 2, true, undefined],
    [42, 0, '/', Infinity],
  ];

  for (const [a, b, op, expected] of cases) {
    test(`calculate(${a}, ${b}, ${op}) -> ${expected}`, () => {
      expect(calculate(a, b, op)).toBe(expected);
    });
  }
});

test.describe('logIceCreamOrders()', () => {
  test.skip(
    logIceCreamOrders([1, 'Chocolate', true, [], 'Strawberry', 999.99, null]) === 'NOT IMPLEMENTED',
    'logIceCreamOrders() is not implemented'
  );
  const cases = [
    [
      [1, 'Chocolate', true, [], 'Strawberry', 999.99, null],
      ['Chocolate', 'Strawberry'],
    ],
    [
      ['Vanilla', 'Vanilla', 'Vanilla', 0, 'Stracciatella'],
      ['Vanilla', 'Vanilla', 'Vanilla', 'Stracciatella'],
    ],
    [
      ['Cheescake Smurfs', 123, 'Noisette', 'Vanilla', Math.PI, { not: 'valid' }],
      ['Cheescake Smurfs', 'Noisette', 'Vanilla'],
    ],
  ];
  let loggedMessages = [];
  let originalConsoleLog = console.log;
  test.beforeEach(() => {
    loggedMessages = [];
    originalConsoleLog = console.log;
    console.log = (message) => {
      loggedMessages.push(message);
    };
  });

  test.afterEach(() => {
    console.log = originalConsoleLog;
  });

  for (const [c, expected] of cases) {
    test(`logIceCreamOrders([${c[0]},...]) -> ${expected}`, () => {
      logIceCreamOrders(c);
      expect(loggedMessages).toEqual(expected);
    });
  }
});

test.describe('countTypes()', () => {
  test.skip(
    countTypes([1, 'Chocolate', true, [], 'Strawberry', 999.99, null]) === 'NOT IMPLEMENTED',
    'countTypes() is not implemented'
  );
  const cases = [
    [
      [1, 'Chocolate', true, [], 'Strawberry', 999.99, null],
      [2, 2, 1, 1, 1],
    ],
    [
      ['Vanilla', 'Vanilla', 'Vanilla', 0, 'Stracciatella'],
      [1, 4, 0, 0, 0],
    ],
    [
      ['Cheescake Smurfs', 123, 'Noisette', 'Vanilla', Math.PI, { not: 'valid' }],
      [2, 3, 0, 1, 0],
    ],
    [[], [0, 0, 0, 0, 0]],
    [
      [[], [[[]]], new Error(), null, new Date()],
      [0, 0, 2, 3, 0],
    ],
  ];

  for (const [c, expected] of cases) {
    test(`countTypes([${c[0]},...]) -> ${expected}`, () => {
      expect(countTypes(c)).toEqual(expected);
    });
  }
});
