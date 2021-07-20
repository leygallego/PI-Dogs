import { SHOWALL } from "../actions";

const initialState = {
    list: []
}

function showBreeds(state = initialState, action) {

    switch (action.type) {
        case SHOWALL:

            return Object.assign({}, state, {list: action.payload});
            
    
        default:

        return state;
     }
    
    
}

export default showBreeds;