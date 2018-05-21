//stworzenie użytkownika
import axios from 'axios';

export const CREATE_USER = 'create_user';
export const CREATE_GROUP = 'create_group';
export const GET_USER_GROUPS = 'get_user_groups';
export const GET_TABLES_LISTS = 'get_tables_lists';
export const CREATE_LIST = 'create_list';
export const SIGN_OUT = 'sign_out';
export const DELETE_TABLE = 'delete_table';
export const DELETE_GROUP = 'delete_group';
export const SHOW_GROUP = 'show_group';

export const GET_USER_TABLES = 'get_user_tables';
export const SIGN_IN = 'sign_in';
export const CREATE_TABLE = 'create_table';

//----------------------------------

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

//----------------------------------------

export function signIn(values, callback, dane) {

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let request2 = axios.post('http://kanban-project-management-api.herokuapp.com/v1/sessions', values, axiosConfig)
  .then(request2 => {
    console.log('signIn ac:', request2.data.data.user)//działa dobrze
  //  getUserTables(request2.data.data.user.email, request2.data.data.user.authentication_token),
    setCookie('cookieEmail', request2.data.data.user.email),
    setCookie('cookieToken', request2.data.data.user.authentication_token),
    callback() })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: SIGN_IN,
    payload: request2
  };
}

//------------------------------------

//WSZYSTKO ZAKOMENTOWANE PONIŻEJ ODNOSI SIĘ DO getUserTables
// export function getUserTables(email, authentication_token) {
//   console.log('getUserTables ac:', email)//działa dobrze
//   console.log('getUserTables ac:', authentication_token)//działa dobrze
//   let axiosConfig = {
//     headers: {
//       'X-User-Email': email,
//       'X-User-Token': authentication_token
//     }
//   };
//
//   let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables',axiosConfig)
//
//   .then(request => {
//
//     return {
//       type: GET_USER_TABLES,
//       payload: request
//     };
//   })
//   .catch((error) => {
//     console.log('Error, trzeba poprawiac :/ ' + error);
//   });
// }
//------------------------------------

   // export function getUserTables(email, authentication_token) {
   //   return function action(dispatch) {
   //     dispatch({ type: FETCH_OFFERS })
   //
   //     console.log('getUserTables ac:', email)//działa dobrze
   //      console.log('getUserTables ac:', authentication_token)//działa dobrze
   //      let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables',axiosConfig)
   //      let axiosConfig = {
   //        headers: {
   //          'X-User-Email': email,
   //          'X-User-Token': authentication_token
   //        }
   //      };
   //
   //     return request.then(
   //       response => dispatch(getDataDone(request)),
   //      // err => dispatch(fetchOffersError(err))
   //     );
   //   }
   // }





   //-----




  // return dispatch => {
  //   let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables',axiosConfig)
  //
  //     .then(request => {
  //       // set state for success
  //       dispatch(getDataDone(request));
  //     })
  //     .catch(error => {
  //       // set state for error
  //       dispatch(getDataFailed(error));
  //     })
  // }



//------------


// export function fun(response) {
//   return{
//   type: GET_USER_TABLES,
//   payload: response
// };
// }


// export const GET_USER_TABLES_PENDING = 'GET_USER_TABLES_PENDING';
// export const GET_USER_TABLES_FULFILLED = 'GET_USER_TABLES_FULFILLED';
// export const GET_USER_TABLES_REJECTED = 'GET_USER_TABLES_REJECTED';

//--------------------------------------------------

export function getUserTables(email, authentication_token) {

       let axiosConfig = {
         headers: {
           'X-User-Email': email,
           'X-User-Token': authentication_token
         }
       };

  let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/tables', axiosConfig)

  return {
    type: GET_USER_TABLES,
    payload: request
  }
}

//------------------------------------

export function getTablesLists(table_id, cookieEmail, cookieToken) {
console.log('getTablesLists ac:')
  let axiosConfig = {
    headers: {
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

 let request = axios.get(`http://kanban-project-management-api.herokuapp.com/v1/tables/${table_id}/lists`, axiosConfig)

 return {
   type: GET_TABLES_LISTS,
   payload: request
 }
}

//------------------------------------

export function createList(values, callback, table_id, cookieEmail, cookieToken) {

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let request2 = axios.post(`http://kanban-project-management-api.herokuapp.com/v1/tables/${table_id}/lists`, values, axiosConfig)
  .then(request2 => {
    console.log('createList ac:', request2.data.data.user)//działa dobrze
  //  getUserTables(request2.data.data.user.email, request2.data.data.user.authentication_token),
    callback() })
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: CREATE_LIST,
    payload: request2
  };
}

//------------------------------------
//NIE DZIAŁA PRAWIDŁOWO 19_05
// export function signOut( cookieEmail, cookieToken, callback ) {
//
//   let axiosConfig = {
//     headers: {
//       'Content-Type': 'application/json',
//       'X-User-Email': cookieEmail,
//       'X-User-Token': cookieToken
//     }
//   };
//
//   let request3 = axios.delete('http://kanban-project-management-api.herokuapp.com/v1/sessions', axiosConfig)
//   .then(request3 => {
//     console.log('signOut ac:', request3),//działa dobrze
//   //  getUserTables(request2.data.data.user.email, request2.data.data.user.authentication_token),
//    callback() })
//   .catch((error) => {
//     console.log('Error, trzeba poprawiac :/ ' + error);
//   });
//
//   return {
//     type: SIGN_OUT,
//     payload: request3
//   };
// }

//------------------------------------
//DZIAŁA
export function createTable(values, cookieEmail, cookieToken, callback) {
  let a = values.name
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let data = {
    name: a,
    is_private: true,
  }
  console.log(data)
  let request2 = axios.post('http://kanban-project-management-api.herokuapp.com/v1/tables', data, axiosConfig)
  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);});
    console.log(request2)
  return {
    type: CREATE_TABLE,
    payload: request2
  };
}

//------------------------------------
//DZIAŁA
export function deleteTable(table_id, cookieEmail, cookieToken, callback) {
  console.log('jestem tu delete ac')
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let request3 = axios.delete(`http://kanban-project-management-api.herokuapp.com/v1/tables/${table_id}`, axiosConfig)
  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });
console.log(request3)
  return {
    type: DELETE_TABLE,
    payload: request3
  };
}

//------------------------------------
//DZIAŁA
export function getUserGroups(cookieEmail, cookieToken) {
  let axiosConfig = {
    headers: {
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let request = axios.get('http://kanban-project-management-api.herokuapp.com/v1/groups',axiosConfig)

  return {
    type: GET_USER_GROUPS,
    payload: request
  };
}

//------------------------------------
//DZIAŁA
export function createGroup(values, cookieEmail, cookieToken, callback) {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let data = {
    "name": values.group_name
  }

  let request = axios.post('http://kanban-project-management-api.herokuapp.com/v1/groups', data, axiosConfig)

  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });

  return {
    type: CREATE_GROUP,
    payload: request
  };
}

//--------------------------------------

export function showGroup(group_id, cookieEmail, cookieToken) {
console.log('showGroup ac:', group_id)
  let axiosConfig = {
    headers: {
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };
  console.log(axiosConfig)
 let request = axios.get(`http://kanban-project-management-api.herokuapp.com/v1/groups/${group_id}`, axiosConfig)

 return {
   type: SHOW_GROUP,
   payload: request
 }
}

//-------------------------------------

export function deleteGroup(group_id, cookieEmail, cookieToken, callback) {
  console.log('jestem tu delete group ac')
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'X-User-Email': cookieEmail,
      'X-User-Token': cookieToken
    }
  };

  let request3 = axios.delete(`http://kanban-project-management-api.herokuapp.com/v1/groups/${group_id}`, axiosConfig)
  .then(() => callback())
  .catch((error) => {
    console.log('Error, trzeba poprawiac :/ ' + error);
  });
console.log(request3)
  return {
    type: DELETE_GROUP,
    payload: request3
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




//document.cookie = "nazwaCookie=wartoscCookie"
function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}


function showCookie(name) {
    if (document.cookie != "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}
