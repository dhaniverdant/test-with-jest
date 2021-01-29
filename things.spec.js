test('Expectation', () => {
  expect('Some String').toBe('Some String')
  expect(13).toBe(13)
  //comparison, great for testing complex values like array/object
  expect([13]).toEqual([13])

  const result = {
    //this will return random value as date by today..
    value: Date.now()
  }

  expect(result).toEqual({
    //..so we need to marking it by expecting the output as any number, whatever the date
    value: expect.any(Number)
  })
})