import {
    REQUEST_QUOTE,
    RECEIVE_QUOTE,
    PAUSE_QUOTE,
    RESUME_QUOTE
} from '../constants/actionTypes';

const default_state = () => {
    return {
        isActive: false,
        isPaused: false,
        quote: null,
        author: null
    };
}


const quoteReducer = (state = default_state(), action) => {
    switch(action.type) {
        case REQUEST_QUOTE: {
            return {
                ...state,
                isActive: false,
                quote: null,
                author: null
            }
        }

        case RECEIVE_QUOTE: {
            return {
                ...state,
                isActive: true,
                quote: action.content,
                author: action.author
            }
        }

        case PAUSE_QUOTE: {
            return {
                ...state,
                isPaused: true
            };
        }

        case RESUME_QUOTE: {
            return {
                ...state,
                isPaused: false
            };
        }

        default:
            return state;
    }
}

export default quoteReducer;