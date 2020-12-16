import React, { Component } from "react";

class GoogleOauth extends Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "104709056949-u0fhqohkasdabjo04pqd88o1ik39b7me.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if i signed in </div>;
    } else if (this.state.isSignedIn === true) {
      return <div>I'm signed in </div>;
    }
    return <div>I'm not signed in </div>;
  }
  render() {
    return <div className="item">  {this.renderAuthButton()} </div>;
  }
}

export default GoogleOauth;
