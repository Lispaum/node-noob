import { testServer } from "../jest.setup"

describe('Character Sheet - Delete', () => {

    it('Trys to delete a existing character-sheet', async () => {

        const response1 = await testServer.post('/character-sheets/')
        .send({
            name: 'geralt',
            level: 3,
            class: 'witcher'
        })

        expect(response1.statusCode).toEqual(201)

        const response2 = await testServer.delete('/character-sheets/1')
            .send()



            expect(response2.statusCode).toEqual(500)


    })
    
    
    it('Trys to delete a non existing character-sheet', async () => {

        const response = await testServer.delete('/character-sheets/9999')
            .send()



            expect(response.statusCode).toEqual(500)
            expect(response.body).toHaveProperty('errors.default')


    })

    


})