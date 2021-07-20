import { combineReducers } from 'redux';
import allBreeds from './allBreeds';


const rootReducer = combineReducers({
    breeds: allBreeds
})

export default rootReducer;
