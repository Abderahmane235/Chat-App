import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

// This component is checking if user is already loged in. If yes then it redirects user to main page when user tries to go to /login and /signup routes.
const NonProtectedRoute = ({ component: Component, ...rest }) => {
  // checking JWT validity
  const checkValidToken = () => {
    const token = localStorage.getItem("JWT_Token");
    if (token) {
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        localStorage.removeItem("JWT_Token");
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  return (
    <Fragment>
      {checkValidToken() ? (
        <Redirect to="/" />
      ) : (
        <Route
          {...rest}
          render={(props) => <Component {...rest} {...props} />}
        />
      )}
    </Fragment>
  );
};

export default NonProtectedRoute;
