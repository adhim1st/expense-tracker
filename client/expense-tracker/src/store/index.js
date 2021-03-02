import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import transactionReducer from "./reducers/transactionReducer";
const rootReducer = combineReducers({
  transactionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
