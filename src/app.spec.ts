import { app } from './__mocks__/app'
import request from 'supertest'

describe('app test', () => {
  app.get('/', function (req, res) {
    res.status(200).json('Hello OpenAi API!')
  })

  it("should have the route '/'", async () => {
    const sut = await request(app).get('/')

    expect(sut.status).toEqual(200)
    expect(sut.headers['content-type']).toMatch(/json/)
    expect(sut.body).toEqual('Hello OpenAi API!')
  })
})
