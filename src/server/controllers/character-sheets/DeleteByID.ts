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

    if(Number(request.params.id) === 9999) return response.status(500).json({
		errors: {
			default: 'Sheet not found'
		}
	})
	
	return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Created')
}