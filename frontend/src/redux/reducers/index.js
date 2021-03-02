import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import accountsReducer from './accounts/accounts';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    accounts: accountsReducer
});

export default createRootReducer;