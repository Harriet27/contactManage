import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddPage } from './Pages';
import { List, Card } from './Components';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={AddPage} exact />
        <Route path='/list' component={List} />
        <Route path='/card' component={Card} />
      </Switch>
    </div>
  );
}

export default App;
