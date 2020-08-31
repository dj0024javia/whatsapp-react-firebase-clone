import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginScreen from './LoginScreen';

function App() {

  const [user, setuser] = useState(null)

  return (


    <div className="app">
      {!user ? (
        < LoginScreen />
      ) : (

          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>

              </Switch>
            </Router>
          </div>

        )
      }


    </div>
  )
}

export default App;
