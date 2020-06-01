// .mock 属性
test('.mock 属性', () => {
  const myMock = jest.fn()

  const a = new myMock()
  const b = {}
  const bound = myMock.bind(b)
  bound()

  console.log(myMock.mock.instances)
  
  
  // 该函数只被调用一次
  expect(mockFunction.mock.calls.length).toBe(1)
  // 函数第一次调用的第一个参数
  expect(mockFunction.mock.calls[0][0]).toBe('first arg')
  // 函数第一次调用的第二个参数
  expect(mockFunction.mock.calls[0][1]).toBe('second arg')
  // 函数第一次调用返回的值是 return value
  expect(mockFunction.mock.results[0].value).toBe('return value')
  // 这个函数被实例化了两次
  expect(mockFunction.mock.instances.length).toBe(2)
  // 此函数第一次实例化返回的对象，有一个 name 属性，其值被设置为 test
  expect(mockFunction.mock.instances[0].name).toBe('test')
})

// -----------------------------------------------------------------------

// Mock 返回值
// mock 函数可以用于在测试期间将测试值注入代码
test('mock 返回值', () => {
  const myMock = jest.fn()
  console.log(myMock())  // undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
  console.log(myMock(), myMock(), myMock(), myMock())  // 10 x true true
})

// 在函数连续传递风格的代码中时，mock 函数也非常有效
// 这种代码分割有助于避免复杂的中间操作，便于直观表现组件的真实意图
// 这有利于在它们被调用之前，将值直接注入到测试中
test.only('mock 返回值2', () => {
  const filterTestFn = jest.fn()

  // 将第一个调用的 mock 返回值设置为 true
  // 第二个 为 false
  filterTestFn
})

