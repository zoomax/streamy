import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import StreamCreate from "./streamCreate";
import StreamShow from "./streamShow";
import StreamEdit from "./streamEdit";
import StreamList from "./streamList";
import StreamDelete from "./streamDelete";
import Header from "./shared/header";

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
