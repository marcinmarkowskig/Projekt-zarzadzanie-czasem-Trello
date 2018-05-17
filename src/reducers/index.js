import { combineReducers } from 'redux';
import TrelloReducers from './reducers_trello';
import { reducer as formReducer } from 'redux-form';
// import {
//   createStore,
//   applyMiddleware,
//   compose
// } from 'redux';
// import thunk from 'redux-thunk';
// import duedates from './reducers/duedates'
//
// export default compose(applyMiddleware(thunk))(createStore)(duedates);
const rootReducer = combineReducers({
  tables: TrelloReducers,
  groups: TrelloReducers,
  form: formReducer
});

export default rootReducer;
