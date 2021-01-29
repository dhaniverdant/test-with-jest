import { TestScheduler } from "jest"

const user = {
  name: 'Tony Tinkerton',
  age: 42,
  job: 'inventor'
}

test('user matches', () => {
  // const userString = "{\"name\":\"Tony Tinkerton\",\"age\":42,\"job\":\"inventor\"}"

  expect(user).toMatchSnapshot()
})
