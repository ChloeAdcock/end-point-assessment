import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Login from './components/login/Login';
import Home from './components/home/Home';
import CreateEvent from './components/createEvent/CreateEvent';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import ViewSingleEvent from './components/viewSingleEvent/ViewSingleEvent';
import { currentUser } from './redux/actions/accounts/accounts';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.accounts.currentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Route path='/' component={Navbar} />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <ProtectedRoute path='/home' component={Home} user={user}/>
        <ProtectedRoute path='/newevent' component={CreateEvent} user={user}/>
        <ProtectedRoute path='/eventdetails' component={ViewSingleEvent} user={user}/>
      </div>
    </ConnectedRouter>
  );
}

export default App;
