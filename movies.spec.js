import movies from './movies'

describe('Favorite Movies', () => {
  let myMovies = []
  beforeEach(() => {
    myMovies = [{
      title: 'Age of Ultron',
      rate: null
    }]
  })

  // test.only means will run only this test and will skip others
  // test.only('can add a movie', () => {
  
  // test.skip means will skip this test and execute others
  test.skip('can add a movie', () => {
    movies.add(myMovies, 'Kung Fury')
    expect(myMovies).toMatchSnapshot()
  })

  test('rate a movie', () => {
    movies.rate(myMovies[0], 5)
    expect(myMovies).toMatchSnapshot()
  })
})
