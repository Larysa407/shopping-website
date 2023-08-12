import { MODAL_OPEN } from '../type/index'
import { MODAL_CLOSE }  from '../type/index'

export const modalReducer = (state = null, action) => {
    switch (action.type) {
        case MODAL_OPEN :
            return action.payload
        case MODAL_CLOSE:
            return null
        default:
            return state    
    }
}
