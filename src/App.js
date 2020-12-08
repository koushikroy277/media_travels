import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import Home from './JSFiles/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
    </>
  );
}

export default App;
