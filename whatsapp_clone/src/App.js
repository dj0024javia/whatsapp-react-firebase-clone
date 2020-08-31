import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (


    <div className="app">
      {/* <h1>Welcome</h1> */}
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/rooms/:roomId">
              <Sidebar />
              <Chat />
            </Route>

            <Route path="/">
              <h1>Hello To Main Page</h1>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>

  );
}

export default App;
