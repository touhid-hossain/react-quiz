import React from "react";
import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div class={classes.account}>
      {currentUser ? (
        <>
          <span class="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <Link to="/login">
            <span
              class="material-icons-outlined"
              title="Account"
              onClick={logout}
            >
              logout
            </span>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
};

export default Account;
