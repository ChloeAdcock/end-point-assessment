import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';
import { Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
      </div>
    </ConnectedRouter>
  );
}

export default App;
