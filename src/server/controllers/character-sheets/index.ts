import * as create from './Create'
import * as deleteByID  from './DeleteByID'
import * as getAll from './GetAll'
import * as getByID  from './GetByID'
import * as updateByID  from './UpdateByID'

export const CharacterSheetController = {
	...create,
	...getAll,
	...getByID,
	...updateByID,
	...deleteByID

}

