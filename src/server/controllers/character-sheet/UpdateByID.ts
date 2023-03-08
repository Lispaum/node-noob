import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { produceValidator } from '../../shared/middlewares/produceValidator'

interface ParamsProps {
    id?: string
}

interface CharacterSheetProps {
    name?: string
    level?: number
    class?: string
}


export const updateByIDValidator: RequestHandler = produceValidator({
	body: yup.object().shape({
		name: yup.string().notRequired().min(3),
		level: yup.number().integer().notRequired(),
		class: yup.string().notRequired(),
	}),
	params: yup.object().shape({
		id: yup.string().required(),
	})
})

export const updateByID = async (request: Request<ParamsProps, object, CharacterSheetProps>, response: Response) => {

	console.log('┴┬┴┤( ͡° ͜ʖ├┬┴┬', request.params)
    
	return response.status(StatusCodes.CREATED).send('Created')
}