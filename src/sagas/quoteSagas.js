import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects'

import {
    receiveQuote
} from '../actions/quoteActions';

import {
    REQUEST_QUOTE
} from '../constants/actionTypes';

import { stripHtml } from '../utils';
import axios from 'axios';


function fetchQuoteApi() {
    return axios.get("http://localhost:5000/api/quote")
        .then(res => {
            return {
                content: stripHtml(res.data.content).trim(),
                author: stripHtml(res.data.title).trim()
            };
        });
}

function* fetchQuote(action) {
    try {
        const quote = yield call(fetchQuoteApi);
        yield put(receiveQuote(quote));
    } catch(err) {
        console.log("Error fetching quote", err);
    }
}

function* requestQuoteWatcher () {
    yield takeLatest(REQUEST_QUOTE, fetchQuote)
}

export default function*() {
    yield all([
        requestQuoteWatcher()
    ]);
};
