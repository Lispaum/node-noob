import { StatusCodes } from "http-status-codes"
import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'


type RequestProperty = 'body' | 'header' | 'params' | 'query'

type Validator = (schemas: {[key in RequestProperty]?: yup.AnyObject}) => RequestHandler

type ErrorsSummary = {
	[key: string]: {
		[key: string]: string
	}
	
}

export const produceValidator: Validator = (schemas) =>  async (request, response, next) => {

const errorsSummary: ErrorsSummary = {}

	Object.entries(schemas).forEach( ([property, schema]) => {

		
		try{
			schema.validateSync(request[property as RequestProperty], {abortEarly: false})
			
		}
		catch(error){
		
			const yupError = error as yup.ValidationError
			const errors: Record<string, string> = {}
	
			yupError.inner.forEach(error => {
				if(error.path === undefined) return
				errors[error.path] = error.message
	
			})
	
			errorsSummary[property] = errors;
			
		}
		
		
	})
	
	if(Object.entries(errorsSummary).length === 0){

		return next()
		
	}else{

		return response.status(StatusCodes.BAD_REQUEST).json({
			errorsSummary
		})
	}
	
	}