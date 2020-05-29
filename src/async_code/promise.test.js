// fetchData 若不使用 callback，而是返回一个 promise，其解析值为字符串 peanut butter
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})
// 注意：一定不要忘记把 promise 作为返回值
// 如果没有加 return 的话，fetchData 返回这个 promise 被 resolve、then() 有机会执行之前，测试就被视为已经完成

test('the fetch fails width an error', () => {
  expect.assertions(1)
  return fetchData().catch(e => expect(e).toMatch('error'))
})
// 请确保添加 expect.assertions 来验证一定数量的断言被调用
// 否则一个 fulfilled 态的 Promise 不会然测试失败

// 也可以在 expect 语句中使用 .resolves 匹配器。jest 将等待此 Promise 解决，如果 Promise reject，则测试失败
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter')
})
// 同样记得加上 return，因为在 fetchData 返回的 promise 变更为 resolved 状态、then() 有机会执行之前，测试就已经被视为已经完成

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error')
})