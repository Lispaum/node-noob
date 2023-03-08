import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { produceValidator } from '../../shared/middlewares/produceValidator'

interface CharacterSheetProps {
    name?: string
    level?: number
    class?: string
}

// const bodyScheme: yup.ObjectSchema<CharacterSheetProps> = 



export const createBodyValidator: RequestHandler = produceValidator({
	body: yup.object().shape({
		name: yup.string().required().min(3),
		level: yup.number().required(),
		class: yup.string().required(),
	})
})

export const create = async (request: Request<object,object, CharacterSheetProps>, response: Response) => {

	console.log('┴┬┴┤( ͡° ͜ʖ├┬┴┬', request.body)
    
	return response.status(StatusCodes.CREATED).send('Created')
}