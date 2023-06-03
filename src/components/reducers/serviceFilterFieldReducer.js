import { CHANGE_FILTER_FIELD, CLEAR_FILTER_FIELD } from "../actions/actionsTypes";

const initialState = { name: '', price: '' }

export default function serviceFilterFieldReducer (state = initialState, action ) {
    switch (action.type) {
        case CHANGE_FILTER_FIELD: {
            const { name, value } = action.payload
            return {...state, [name]: value};
        }
        case CLEAR_FILTER_FIELD: {
            const {name} = action.payload;
            return {...state,  [name]: ''}
        }
        default:
            return state;
    }
}