import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state/rootReducer';
import undoable from 'redux-undo';

const initialState = {};

const middleware = [thunk];

const store = createStore(

    undoable(rootReducer,
  initialState),
  compose(
    applyMiddleware(...middleware)
  )
);

export default store;
