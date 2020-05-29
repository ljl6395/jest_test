// 例子：如果我们考虑一些与城市信息数据库进行交互的测试
// 则必须在每个测试之前调用方法 initializeCityDatabase()
// 同时必须在每个测试后，调用方法 clearCityDatabase()

// =======================================================================

// 多次测试重复设置
// beforeEach 和 afterEach
beforeEach(() => {
  initializeCityDatabase()
})
afterEach(() => {
  clearCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

// 如果 initializeCityDatabase() 返回解决数据库初始化为 promise，则要在之前加 return
beforeEach(() => {
  return initializeCityDatabase()
})

// ---------------------------------------------------------------------

// 一次性设置
beforeAll(() => {
  return initializeCityDatabase()
})
afterAll(() => {
  return clearCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy()
})

// -------------------------------------------------------------------------

// 默认情况下，before 和 after 的块可以应用到文件中的每个测试，此外可以通过 describe 块来将测试分组
// 所以当 before 和 after 的块在 describe 内部时，则其只适用于该 describe 块内的测试

// 假如，不仅有一个城市数据库，还有一个食品数据库
beforeEach(() => {
  return initializeCityDatabase()
})

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy()
})
test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruth()
})

describe('matching cities to foods', () => {
  beforeEach(() => {
    return initializeFoodDatabase()
  })

  test('Vienna <3 sausage', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true)
  })
  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true)
  })
})

