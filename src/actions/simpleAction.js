export const SIMPLE_ACTION='SIMPLE_ACTION';
export const INCREMENT_ACTION='INCREMENT_ACTION';

export const simpleAction = () => ({
     type: SIMPLE_ACTION,
     payload: 'result_of_simple_action'
});

export const incrementAction = () => ({
    type: INCREMENT_ACTION,
});

export const fetchUsersAction = () => ({
    type: 'FETCH_USERS',
});