import { createStore, applyMiddleware } from "redux";
import createRootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export default createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
