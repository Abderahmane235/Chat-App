import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

// This component is checking if user is not loged in. If yes then it redirects user to login page.
const ProtectedRoute = ({ component: Component, ...rest }) => {
  // checking JWT validity
  const checkValidToken = () => {
    const token = localStorage.getItem("JWT_Token");
    if (token) {
      let decodedToken = jwt_decode(token);
      let currentDate = new Date();

      // JWT exp is in seconds
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
        <Route
          {...rest}
          render={(props) => <Component {...rest} {...props} />}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
