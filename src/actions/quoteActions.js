import {
    REQUEST_QUOTE,
    RECEIVE_QUOTE,
    PAUSE_QUOTE,
    RESUME_QUOTE
} from '../constants/actionTypes';

export const requestQuote = () => {
    return {
        type: REQUEST_QUOTE
    };
};

export const receiveQuote = (quote) => {
    return Object.assign({ type: RECEIVE_QUOTE }, quote);
};

export const pauseQuote = () => {
    return {
        type: PAUSE_QUOTE
    };
};

export const resumeQuote = () => {
    return {
        tyoe: RESUME_QUOTE
    };
};