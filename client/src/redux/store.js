import { createStore,combineReducers,applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { todosReducers } from './reducer/todosReducer';

const reducer = combineReducers({
    todos: todosReducers
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;