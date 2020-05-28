// toMatch()
// not.toMatch()
// toContain()
// toThrow()  如果你想要测试的特定函数抛出一个错误，在它调用时，使用

test('string 测试', () => {
  expect('hello').toBe('hello')
})

test('不包含 I', () => {
  expect('hello').not.toMatch(/I/)
})

test('包含 hello', () => {
  expect('say hello world').toMatch(/hello/)
})

test('数组中是否包含 pear', () => {
  const array = [
    'apple',
    'banana',
    'pear',
  ]

  expect(array).toContain('pear')
  expect(new Set(array)).toContain('pear')
})


function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});