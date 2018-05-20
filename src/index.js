import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

//import CreateUser from './components/create_user';
//import Tables from './components/tables';
import GetUserTables from './components/get_user_tables';
import GetTablesLists from './components/get_tables_lists';
import GetUserGroups from './components/get_user_groups';
import CreateList from './components/create_list';
import CreateTable from './components/create_table';
import CreateUser from './components/create_user';
import CreateGroup from './components/create_group';
import SignIn from './components/sign_in';

import reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
//---
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// const store2 = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

//----

// const store = createStore(
//   rootReducer,
//   { isLoading: false, isError: false, repositories: [] },
//   applyMiddleware(promiseMiddleware())
// );

//-----------
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
       <Switch>
         <Route path="/create-user" component={CreateUser} />
         <Route path="/create-table" component={CreateTable} />
         <Route path="/create-group" component={CreateGroup} />
         <Route path="/get-user-groups" component={GetUserGroups} />
         <Route path="/get-user-tables" component={GetUserTables} />
         <Route path="/get-tables-lists/:id/create-list" component={CreateList} />
         <Route path="/get-tables-lists/:id" component={GetTablesLists} />
         <Route path="/" component={SignIn}/>
       </Switch>
     </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

//   1<Route path="/get-user-groups" component={GetUserGroups} />
//   2<Route path="/create-table" component={CreateTable} />
// 4<Route path="/get-user-tables" component={GetUserTables} />
