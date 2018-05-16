import { combineReducers } from 'redux';
import TrelloReducers from './reducers_trello';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tables: TrelloReducers,
  groups: TrelloReducers,
  form: formReducer
});

export default rootReducer;
