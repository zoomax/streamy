import React, { Component } from "react";
import { trySignIn, trySignOut } from "../../store/actions/index";
import { connect } from "react-redux";

class GoogleOauth extends Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.onAuthChange = this.onAuthChange.bind(this);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "104709056949-u0fhqohkasdabjo04pqd88o1ik39b7me.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange(isSignIn) {
    if (isSignIn) {
      this.props.trySignIn(this.auth);
    } else {
      this.props.trySignOut();
    }
  }
  onSignIn() {
    this.auth.signIn();
  }
  onSignOut() {
    this.auth.signOut();
  }

  render() {
    return (
      <div className="item">
        {this.props.isSignIn && (
          <button onClick={this.onSignOut} className="ui button red google">
            <i className="google icon" />
            sign out user {this.props.currentUser}
          </button>
        )}
        {!this.props.isSignIn && (
          <button onClick={this.onSignIn} className="ui button red google">
            <i className="google icon" />
            sign in
          </button>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    trySignIn: (auth) => dispatch(trySignIn( auth)),
    trySignOut: () => dispatch(trySignOut()),
  };
};
const mapStateToProps = (state) => {
  return {
    isSignIn: state.isAuth.isSignedIn,
    currentUser : state.isAuth.currentUser 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GoogleOauth);
