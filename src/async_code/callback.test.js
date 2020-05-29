// 默认情况下，jest测试一旦执行到末尾就会完成。这就意味这测试将不会按预期工作
// 问题在于一旦 fetchData() 执行结束，此测试就在没有调用回调函数前结束
test('don\'t do like this', () => {
  function callback(data) {
    expect(data).toBe('hello')
  }

  fetchData(callback)
})

// 此方法解决上面的问题。使用单个参数调用 done，而不是将测试放在一个空参数的函数
// jest 会等 done 回调函数执行结束后结束测试
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});