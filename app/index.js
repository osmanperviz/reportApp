
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineRedurs, compose } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import Navigation from './containers/Navigation'

const loggerMiddleware = createLogger({ predicate: (getStae, actions) => __DEV__})
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
      sagaMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer)
}
const store = configureStore({})
sagaMiddleware.run(rootSaga)


const App = () => (
    <Provider store={store}>
      <Navigation />
    </Provider>
)
export default App
