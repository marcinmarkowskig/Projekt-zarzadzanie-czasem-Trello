import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

//import CreateUser from './components/create_user';
import Tables from './components/tables';
import GetUserGroups from './components/get_user_groups';
import CreateTable from './components/create_table';
import CreateUser from './components/create_user';
import GetUserTables from './components/get_user_tables';
import SignIn from './components/sign_in';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
     <div>
       <Switch>

         <Route path="/create-user" component={CreateUser} />
<Route path="/get-user-tables" component={GetUserTables} />
<Route path="/tables" component={Tables} />
         <Route path="/" component={SignIn}/>
       </Switch>
     </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

//   1<Route path="/get-user-groups" component={GetUserGroups} />
//   2<Route path="/create-table" component={CreateTable} />
// 4<Route path="/get-user-tables" component={GetUserTables} />
