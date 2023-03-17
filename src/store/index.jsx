import {createStore} from 'redux'

const reducerFn = (state = {counter: 20}, action) => {
    return state
}

const store = createStore(reducerFn)

export default store