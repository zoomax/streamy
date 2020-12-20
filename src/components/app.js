import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamCreate from "./streamCreate";
import StreamShow from "./streamShow";
import StreamEdit from "./streamEdit";
import StreamList from "./streamList";
import StreamDelete from "./streamDelete";
import Header from "./shared/header";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../store/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route component={StreamList} path="/" exact={true} />
              <Route component={StreamCreate} path="/new" exact={true} />
              <Route component={StreamEdit} path="/:id/edit" exact={true} />
              <Route component={StreamDelete} path="/:id/delete" exact={true} />
              <Route component={StreamShow} path="/:id" exact={true} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
