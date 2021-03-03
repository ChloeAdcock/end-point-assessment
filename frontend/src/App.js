import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import { currentUser } from './redux/actions/accounts/accounts';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.accounts.currentUser);
  const userId = useSelector(state => state.accounts.currentUserId);

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <ProtectedRoute path='/home' component={Home} user={{username: user, id: userId}}/>
      </div>
    </ConnectedRouter>
  );
}

export default App;
