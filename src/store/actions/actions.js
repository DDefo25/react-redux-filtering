import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAR_SERVICE_FIELD, CHANGE_FILTER_FIELD, CLEAR_FILTER_FIELD } from './actionsTypes'


export function addService ( name, price ) {
    return { type: ADD_SERVICE, payload: {name, price}}
}

export function editService ( id, name, price ) {
    return { type: EDIT_SERVICE, payload: {id, name, price}}
}

export function removeService ( id ) {
    return { type: REMOVE_SERVICE, payload: {id}}
}

export function changeServiceField ( name, value ) {
    return { type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function clearServiceField ( name ) {
    return { type: CLEAR_SERVICE_FIELD, payload: {name}}
}

export function changeFilterField ( value ) {
    return { type: CHANGE_FILTER_FIELD, payload: {value}}
}

export function clearFilterField () {
    return { type: CLEAR_FILTER_FIELD, payload: {}}
}
