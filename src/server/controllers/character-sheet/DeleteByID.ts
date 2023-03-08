import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { produceValidator } from '../../shared/middlewares/produceValidator'

interface ParamsProps {
    id?: string
}

export const deleteByIDValidator: RequestHandler = produceValidator({
	params: yup.object().shape({
		id: yup.string().required(),
	})
})

export const deleteByID = async (request: Request<ParamsProps>, response: Response) => {

	console.log('┴┬┴┤( ͡° ͜ʖ├┬┴┬', request.query)
    
	return response.status(StatusCodes.CREATED).send('Created')
}