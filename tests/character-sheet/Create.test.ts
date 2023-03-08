import { testServer } from "../jest.setup"

describe('Character Sheet - Create', () => {

    it('Creates a character-sheet', async () => {

        const response = await testServer.post('/character-sheet')
            .send({
                name: 'geralt',
                level: 3,
                class: 'witcher'
            })



            expect(response.statusCode).toEqual(201)


    })

})