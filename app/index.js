
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineRedurs, compose } from 'redux'
import createLogger from 'redux-logger'
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import AppContainer from './containers/AppContainer'

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
      <AppContainer />
    </Provider>
)
export default App
