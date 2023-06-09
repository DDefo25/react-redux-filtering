import { CHANGE_FILTER_FIELD, CLEAR_FILTER_FIELD } from "../actions/actionsTypes";

const initialState = ''

export default function serviceFilterFieldReducer (state = initialState, action ) {
    switch (action.type) {
        case CHANGE_FILTER_FIELD: {
            const { value } = action.payload
            return value;
        }
        case CLEAR_FILTER_FIELD: {
            return '';
        }
        default:
            return state;
    }
}