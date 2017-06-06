'use strict';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {createStore,applyMiddleware} from 'redux';
import startForman from '../sagas';

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    return {...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(startForman)
  };
};
