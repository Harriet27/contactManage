import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  ContactList,
  ManageContacts,
  RegisterPage,
  LoginPage,
  AddPage,
} from './Pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={AddPage} exact />
        <Route path='/list' component={ContactList} />
        <Route path='/manage' component={ManageContacts} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
