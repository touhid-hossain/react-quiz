import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Route,  } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route {...rest}> {(props) => <Component {...props} />} </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
