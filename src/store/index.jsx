import {createStore} from 'redux'

const reducerFn = (state = {counter: 0}, action) => {
    // redux limitation
    // redux should be a synchronous function
    // it should not mutate the orginal state

    // if(action.type === "INCREMENT"){
    //     return {counter: state.counter + 1}
    // }else if(action.type === "DECREMENT"){
    //     return {counter: state.counter - 1}
    // }
    // return state

    switch(action.type){
        case "INCREMENT":
            return {counter: state.counter + 1}
        case "DECREMENT":
            return {counter: state.counter - 1}
        case "ADD":
            return {counter: state.counter + action.payload}
        default:
            return state
    }

}

const store = createStore(reducerFn)

export default store