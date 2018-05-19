import _ from 'lodash';
import { GET_USER_TABLES, GET_USER_GROUPS, SIGN_IN, GET_TABLES_LISTS } from '../actions';
import * as actions from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_TABLES:
//    console.log(action.payload.promise)
//    let a= Promise.resolve(action.payload)
//    console.log(a)
// Promise.resolve(action.payload).then(function(value){console.log('Value:',value)})
// case actions.GET_USER_TABLES_PENDING:
//     console.log( {...state} )
//   return { ...state, isLoading: true };
// case actions.GET_USER_TABLES_FULFILLED:
//     console.log( {...state} )
//   return { ...state, isLoading: false, repositories: action.payload };
// case actions.GET_USER_TABLES_REJECTED:
//     console.log( {...state} )
//     return { ...state, isLoading: false, isError: true }
      console.log('action: reducer', action.payload.data.data)
    return _.mapKeys(action.payload.data.data, 'id');

    case GET_TABLES_LISTS:
      console.log('action: reducer', action.payload.data.data)
    return _.mapKeys(action.payload.data.data, 'id');
    default:
      return state;
  }
}
