import {CONSTANTS} from "../actions"

const initialState = ["board-0"]

const boardOrderReduce = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_BOARD : 
            return [...state, `board-${action.payload.id}`]
        
        case CONSTANTS.DELETE_BOARD :
            const newState = state.filter(id=> id!== action.payload)
            return newState
        
        default :
            return state
    }
}

export default boardOrderReduce