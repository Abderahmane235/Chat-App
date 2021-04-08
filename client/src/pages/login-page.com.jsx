import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { loginUser } from "../utils/users";
import {
  Grid,
  TextField,
  Card,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

import { useInput } from "../components/useInput";
import makeToast from "../toaster";

const LoginPage = (props) => {
  const { value: username, bind: bindUsername } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  // method for calling loginUser axious call. It also validate username and password is not empty.
  const handleUserLogin = () => {
    if (username === "" || password === "") {
      return makeToast("error", "Enter value in all required fields");
    }
    loginUser(props, username, password);
  };

  return (
    <>
      <AppBar style={styles.header} elevation={10}>
        <Toolbar>
          <Typography variant="h6">Login to Chat App of Adratahir</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        style={styles.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Card style={styles.card} elevation={10}>
          <Grid item style={styles.gridItem}>
            <TextField
              name="username"
              required
              style={styles.textField}
              label="User Name"
              placeholder="Enter username"
              variant="outlined"
              type="email"
              {...bindUsername}
            />
          </Grid>
          <Grid item style={styles.gridItem}>
            <TextField
              name="password"
              required
              style={styles.textField}
              label="Password"
              placeholder="Enter your password"
              variant="outlined"
              type="password"
              {...bindPassword}
            />
          </Grid>
          <Grid item style={styles.gridItem}>
            <Button
              color="primary"
              variant="contained"
              style={styles.button}
              onClick={handleUserLogin}
            >
              Login
            </Button>
          </Grid>
          <Grid item style={styles.registerButton}>
            <Link to="/signup">
              <Button color="primary" variant="contained" style={styles.button}>
                Create New Account
              </Button>
            </Link>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

const styles = {
  header: {},
  grid: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  card: { padding: 40 },
  textField: { width: 300 },
  gridItem: { paddingTop: 12, paddingBottom: 5 },
  registerButton: { paddingTop: 5, paddingBottom: 12 },
  button: { width: 300 },
};

export default withRouter(LoginPage);
