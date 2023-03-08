import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { CharacterSheetController } from '../controllers'



const router =  Router()


router.get('/', (request, response) => {

	return response.send('Witcher App')
})

router.post('/character-sheets', CharacterSheetController.createBodyValidator, CharacterSheetController.create)
router.get('/character-sheets', CharacterSheetController.getAllValidator, CharacterSheetController.getAll)
router.get('/character-sheets/:id', CharacterSheetController.getByIDValidator, CharacterSheetController.getByID)
router.put('/character-sheets/:id', CharacterSheetController.updateByIDValidator, CharacterSheetController.updateByID)
router.delete('/character-sheets/:id', CharacterSheetController.deleteByIDValidator, CharacterSheetController.deleteByID)




export { router }