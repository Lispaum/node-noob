import supertest from 'supertest'

import { server } from '../src/server/server'

export const testServer = supertest(server)



// testServer.post('/character-sheet').send({
//     name: 'geralt',
//     level: 2,
//     class: 'bruxo'
// })