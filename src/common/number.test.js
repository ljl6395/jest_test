test('测试数字的比较', () => {
  const value = 2 + 3

  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(5)
  expect(value).toBeLessThan(6)
  expect(value).toBeLessThanOrEqual(5)

  // toBe() toEqual() 都可以用来测值，不同点是 toEqual() 还可以用来测 对象 或 数组
  expect(value).toBe(5)
  expect(value).toEqual(5)
})

test('测试浮点数相加', () => {
  const value = 0.1 + 0.2

  // expect(value).toBe(0.3)  这句话会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3)
})