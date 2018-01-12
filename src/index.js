import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App"; //changed folder
import registerServiceWorker from "./registerServiceWorker";

//redux setup items
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

//custom middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist"; //for keeping store on refresh
import storage from "redux-persist/es/storage"; //for keeping store on refresh

//importing our store
import {stocksApp} from "./reducers";

//redux persist additionals for the render component
import {PersistGate} from "redux-persist/es/integration/react";
//redux persist additionals for the render component
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating a persistant store
const configureStore = composeEnhancers(applyMiddleware(thunk, logger))(
  createStore
);

const config = {
  key: "root",
  storage
};

const combinedReducer = persistReducer(config, stocksApp); //use persistReducer for a combined reducer, else persistCombineReducers for a non combined one

const createAppStore = () => {
  let store = configureStore(combinedReducer);
  let persistor = persistStore(store);

  return {persistor, store};
};

const {persistor, store} = createAppStore();

persistStore(store);

//regular redux setup to render
//with the persistor addition for redux persist
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

//provided by create-react-app
registerServiceWorker();
