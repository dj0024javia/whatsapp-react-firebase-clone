import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import { useStateValue } from './StateProvider';



function App() {
  // const [user, setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  return (

    < div className="app" >
      {!user ? (
        <LoginScreen />
      ) : (

          <div className="app__body">
            <Router>
              <Switch>

                <Route path='/rooms/:roomId'>
                  <Sidebar />
                  <Chat />
                </Route>

                <Route path="/">
                  <Sidebar />
                  <Chat />
                </Route>

              </Switch>
            </Router>
          </div>

        )
      }
    </div >
  )
}

export default App;
