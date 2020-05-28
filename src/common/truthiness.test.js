// toBeNull  只匹配 null
// toBeUndefined  只匹配 undefined
// toBeDefined  与上相反
// toBeTruthy  匹配任何 if 语句为真
// toBeFalsy  匹配任何 if 语句为假

test('测试为 null', () => {
  const n = null

  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('测试为 zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});