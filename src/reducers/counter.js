
import {INCREMENT, DECREMENT} from '../actions/counter'

const initialState = 0

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.step

        case DECREMENT:
            return state - action.step

        default:
            return state
    }
}
