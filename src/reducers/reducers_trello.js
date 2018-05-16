import _ from 'lodash';
import { GET_USER_TABLES, GET_USER_GROUPS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_GROUPS:
      return { ...state};
      //return (_.mapKeys(action.payload.data, 'id'));
    case GET_USER_TABLES:
    console.log('GET_USER_TABLES:')
    console.log(action)
      return { ...state};
      //return (_.mapKeys(action.payload.data, 'id'));
    default:
      return state;
  }
}
