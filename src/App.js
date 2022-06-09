import React from 'react';
import Dashboard from './Components/Dashboard'
// import AccountSetting from './Components/AccountSetting'
// import Editor from './Components/Editor'
// import Home from './Components/Home'
// import NotFound from './Components/NotFound'
// import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Dashboard/>
      {/* <Routes>
        <Route path= '/' exact element ={<Dashboard/>} />
        <Route path= '/Home' exact element ={<Home/>} />
        <Route path= '/Editor' exact element ={<Editor/>} /> 
        <Route path= '/AccountSetting' exact element ={<AccountSetting/>} />
        <Route path= '*' exact element ={<NotFound/>} />
      </Routes> */}
    </div>
  );
}

export default App;
