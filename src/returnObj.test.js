const obj = require('./returnObj')

test('对象测试', () => {
  // expect(obj()).toEqual({ name: 'liu', age: 24 })
  expect(obj()).toEqual([1,2,3])
  expect(obj()).not.toEqual([])
})
