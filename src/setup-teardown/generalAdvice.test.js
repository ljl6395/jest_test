// 如果测试失败，第一件要检查的事是：当仅运行这条测试时，它是否仍然失败

test('this test will not run', () => {
  expect('A').toBe('A')
})

test.only('this will be the only test that runs', () => {
  expect(true).toBe(false)
})

test('this test will not run', () => {
  expect('B').toBe('B')
})