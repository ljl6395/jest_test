// async await
test('the data is peanut butter', async () => {
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

test('the fetch fails width an error', async ()=> {
  expect.assertions(1)
  try {
    await fetchData()
  } catch (e) {
    expect(e).toMatch('error')
  }
})

// 同样也可以使用 .resolves 和 .rejects
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails width an error', async () => {
  await expect(fetchData()).rejects.toThrow('error')
})

