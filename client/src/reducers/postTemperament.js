import { POSTTEMPERAMENT } from "../actions";

inicialState = {
    list: []
}

function postTemperament(state = inicialState, action) {

    switch(action.type){
        case
        POSTTEMPERAMENT: return console.log("enviando post");

        default: return state
    }
    
}

export default postTemperament;