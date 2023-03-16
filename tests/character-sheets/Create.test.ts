import { testServer } from "../jest.setup"

describe('Character Sheet - Create', () => {

    it('Creates a character-sheet', async () => {

        const response = await testServer.post('/character-sheets')
            .send({
                name: 'geralt',
                level: 3,
                class: 'witcher'
            })



            expect(response.statusCode).toEqual(201)


    })


    it('Try to a character-sheet with missing props', async () => {

        const response = await testServer.post('/character-sheets')
            .send({
                name: 'geralt',
                // level: 3,
                class: 'witcher'
            })



            expect(response.statusCode).toEqual(400)
            expect(response.body).toEqual({
                "errorsSummary": {
                    "body": {
                        "level": "level is a required field"
                    }
                }
            })


    })

})