import User from './user'

describe('User', () => {
  test('name returns full name', () => { 
    const user = new User({ firstName: 'John', lastName: 'Doe' }) //value we input
    expect(user.name).toBe('John Doe') //expected output
  })
})
