import _ from 'lodash';
import { GET_USER_TABLES, GET_USER_GROUPS, SIGN_IN } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER_TABLES:
    console.log('GET_USER_TABLES:')
    // console.log(state)
    // console.log(...state)
    console.log({state})
    console.log({action})
      // return { ...state};
      return (_.mapKeys(action.payload.data, 'id'));
    default:
      return state;
  }
}
