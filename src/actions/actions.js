
// action types/constants
export const ON_INCREMENT_CLICK = 'actions/ON_INCREMENT_CLICK';
export const ON_DECREMENT_CLICK = 'actions/ON_DECREMENT_CLICK';

// action
export const onIncrementAction = () => ({
    type: ON_INCREMENT_CLICK,
})

export const onDecrementAction = () => ({
    type: ON_DECREMENT_CLICK,
})
