
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineRedurs, compose } from 'redux'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './app/sagas'

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
    
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
