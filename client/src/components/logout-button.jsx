import React from "react";
import { Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const LogoutButton = (props) => {
  const logoutUser = () => {
    localStorage.removeItem("JWT_Token");
    props.history.push("/");
  };
  return (
    <Button style={styles.logout} variant="outlined" onClick={logoutUser}>
      <Typography variant="h6">Logout</Typography>
    </Button>
  );
};

const styles = {
  logout: { width: "15%", marginLeft: "auto", color: "#fff" },
};

export default withRouter(LogoutButton);
