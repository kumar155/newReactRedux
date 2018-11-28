import { SIMPLE_ACTION, INCREMENT_ACTION } from "../actions/simpleAction";

export const simpleReducer = (state = 'Test', action) => {
    switch (action.type) {
     case SIMPLE_ACTION:
      return action.payload;
     default:
      return state
    }
  };

export const incrementReducer = (state = 0, action) => {
    switch (action.type) {
     case INCREMENT_ACTION:
      return state +1;
     default:
      return state
    }
};

export const myComponentReducer = (state = 10, action) => {
  switch (action.type) {
   case INCREMENT_ACTION:
    return state - 1;
   default:
    return state
  }
};