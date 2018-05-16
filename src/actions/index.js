//stworzenie użytkownika
import axios from 'axios';

export const GET_USER_GROUPS = 'get_user_groups';
export const CREATE_USER = 'create_user';
export const GET_USER_TABLES = 'get_user_tables';
export const SIGN_IN = 'sign_in';
export const CREATE_TABLE = 'create_table';

//----------------------------------

export function signIn(values, callback) {

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let request2 = axios.post('http://kanban-project-management-api.herokuapp.com/v1/sessions', values, axiosConfig)
  .then(request2 => {
    console.log('signIn:'),
    console.log(request2.data.data.user),//działa dobrze
    getUserTables(request2.data.data.user.email, request2.data.data.user.authentication_token)
    //callback()
  })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: SIGN_IN,
    payload: request2,
  };
}

//--------------------------------------

export function createUser(values, callback) {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let values2 = {
    "user": values
  }

  let request = axios.post('http://kanban-project-management-api.herokuapp.com/v1/users', values2, axiosConfig)

  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}

//------------------------------------

export function getUserTables(email, authentication_token) {
  console.log(email)//działa dobrze
  console.log(authentication_token)//działa dobrze
  let axiosConfig = {
    headers: {
      'X-User-Email': email,
      'X-User-Token': authentication_token
    }
  };

  let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables',axiosConfig)

  .then(request => {
    console.log('getUserTables:');
    console.log(request.data.data);//działa
    //!push('/get-user-tables');
  })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: GET_USER_TABLES,
    payload: request
  };
}

//------------------------------------
export function getUserGroups() {
  let axiosConfig = {
    headers: {
      'X-User-Email': 'romek1111@gmail.com',
      'X-User-Token': 'KQNeD2vhWnqDxcfy6RBa'
    }
  };

  let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/groups',axiosConfig)
  //let request2 = request.data.data
  //let a;
  .then(request => {
    console.log(request.data);
    //a = request.data.data;
  })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  if (!request) {
    return <div>Loading...</div>
  }
  return {
    type: GET_USER_GROUPS,
    payload: request
  };
}
//------------------------------------
export function createTable(values, callback) {
  let a = values.name
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': 'romek1111@gmail.com',
      'X-User-Token': 'KQNeD2vhWnqDxcfy6RBa'
    }
  };

  let data = {
    name: a,
    is_private: false,
  }
// console.log(data)
//   let data2={
// 	"name": "test table2",
// 	"is_private": false
//   }
//console.log(data2)
  let request = axios.post('http://kanban-project-management-api.herokuapp.com/v1/tables', data2, axiosConfig)
  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });
console.log(request)
  return {
    type: CREATE_TABLE,
    payload: request
  };
}
//------------------------------------


// function asyncStart(){
//    return { type:'ASYNC_REQUEST' };
// }
// function asyncError(e){
//  return {type:'ASYNC_ERROR', payload:{error:e}};
// }
// function asyncSuccess(res){
//   return {type:'ASYNC_SUCCESS',payload:{result:res}};
// }
// function asyncMethod(){
//  return (dispatch)=>{
//      dispatch(asyncStart());// or use  {type:'Something',payload:....};
//       anAsyncSomething.then((val)=>{
//           dispatch(asyncSuccess(val));
//        })
//       .catch((e)=>{
//           dispatch(asyncError(e));
//      });
//   }
//
// }
