import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/store';

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
      </div>
    </ConnectedRouter>
  );
}

export default App;
