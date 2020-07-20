import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddPage, ManageContacts } from './Pages';
import { List } from './Components';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={AddPage} exact />
        <Route path='/list' component={List} />
        <Route path='/manage' component={ManageContacts} />
      </Switch>
    </div>
  );
}

export default App;
