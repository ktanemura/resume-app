import {
    all,
} from 'redux-saga/effects'

import quoteSagas from './quoteSagas';

export default function*() {
    yield all([
        quoteSagas()
    ]);
};