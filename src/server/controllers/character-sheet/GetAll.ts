import { Request, RequestHandler, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'
import { produceValidator } from '../../shared/middlewares/produceValidator'

interface QueryProps {
    page?: number
    limit?: number
    filter?: string
}


export const getAllValidator: RequestHandler = produceValidator({
	query: yup.object().shape({
		page: yup.number().notRequired().moreThan(0),
		limit: yup.number().notRequired().moreThan(0),
		filter: yup.string().notRequired(),
	})
})

export const getAll = async (request: Request<object,object, object, QueryProps>, response: Response) => {

	console.log('┴┬┴┤( ͡° ͜ʖ├┬┴┬', request.query)
    
	return response.status(StatusCodes.CREATED).send('Created')
}