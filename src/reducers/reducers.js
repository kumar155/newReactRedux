import { ON_INCREMENT_CLICK, ON_DECREMENT_CLICK } from "../actions/actions";

export const IncrementCountReducer = (state = 0, action) => {
    switch(action.type) {
        case ON_INCREMENT_CLICK:
            return state + 1;
        default:
            return state;
    }
};

export const DecrementCountReducer = (state = 50, action) => {
    switch(action.type) {
        case ON_DECREMENT_CLICK:
            return state - 1;
        default:
            return state;
    }
};

export const MixingCountReducer = (state = 10, action) => {
    switch(action.type) {
        case ON_INCREMENT_CLICK:
            return state + 1;
        case ON_DECREMENT_CLICK:
            return state - 1;
        default:
            return state;
    }
}