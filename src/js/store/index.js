// src/js/store/index.js


//import { createStore } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  //applyMiddleware(forbiddenWordsMiddleware)
  //storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)) 
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(apiSaga);

export default store;
