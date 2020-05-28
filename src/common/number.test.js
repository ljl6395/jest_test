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