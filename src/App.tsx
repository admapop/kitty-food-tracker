import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import CatPage from './pages/CatPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/cat' component={CatPage} />
    </Switch>
  );
}

{
  /* <div className='App'>
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className='App-link'
      href='https://reactjs.org'
      target='_blank'
      rel='noopener noreferrer'
    >
      Learn React
    </a>
  </header>
</div> */
}
export default App;
