import { SET_MESSAGE } from '../types/message';

const initState = {
    message: '',
};
export default (state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case SET_MESSAGE:
            return { ...state, message: action.payload.message };
        default:
            return state;
    }
};
