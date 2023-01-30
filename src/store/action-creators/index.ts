import * as UserActionCreatators from './user'
import * as TodosActionCreatators from './todo'

export default {
    ...TodosActionCreatators,
    ...UserActionCreatators,
}