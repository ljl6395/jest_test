const sum = require('./sum')

test('add 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('测试相反匹配', () => {
  for (let a = 1; a < 10; a++) {
    for ( let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  } 
})