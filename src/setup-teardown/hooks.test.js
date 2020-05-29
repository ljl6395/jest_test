beforeAll(() => console.log('1 - beforeAll'))  // 1
afterAll(() => console.log('1 - afterAll'))  // 20

beforeEach(() => console.log('1 - beforeEach'))  // 2 5 9 14
afterEach(() => console.log('1 - afterEach'))  // 4 7 13 18

test('', () => console.log('1 - test'))  // 3
test('', () => console.log('1 - test2'))  // 6

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'))  // 8
  afterAll(() => console.log('2 - afterAll'))  // 19

  beforeEach(() => console.log('2 - beforeEach'))  // 10 15
  afterEach(() => console.log('2 - afterEach'))  // 12 17

  test('', () => console.log('2 - test'))  // 11
  test('', () => console.log('2 - test2 ')) // 16
})