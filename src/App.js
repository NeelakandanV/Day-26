import './App.css';
import BaseApp from './AppBase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import { UserData } from './user-data';
import AddUser from './Create-user';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import ViewProfile from './view-Profile';
import EditProfile from './Edit-Profile';
import ListUser from './List-Users';
import EditUser from './Edit-User';
import NoPage from './WrongPage';

function App() {

  const [user,setUser]=useState(UserData);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Dashboard
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path='/users'>
          <ListUser
          user={user}
          setUser={setUser}
          />
        </Route>

        <Route path='/create-user'>
          <AddUser
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path="/edit-user/:id">
          <EditUser
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path='/profile/:id'>
          <ViewProfile
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path='/edit-profile/:id'>
          <EditProfile
          user={user}
          setUser={setUser}/>
        </Route>

        <Route path='**'>
          <NoPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
