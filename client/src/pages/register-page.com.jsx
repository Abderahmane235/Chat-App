import React from "react";
import makeToast from "../toaster";
import { Link } from "react-router-dom";
import { registerUser } from "../utils/users";
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

const RegisterPage = (props) => {
  const { value: username, bind: bindUsername } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");

  // method for calling loginUser axious call. It also validate username, password and confirm password is not empty and password is equal to confirm password.
  const handleUserRegister = () => {
    if (username === "" || password === "" || confirmPassword === "") {
      return makeToast("error", "Enter value in all required fields");
    }
    if (password !== confirmPassword) {
      return makeToast("error", "password and confirm passowrd are not same");
    }
    registerUser(props, username, password);
  };

  return (
    <>
      <AppBar style={styles.header} elevation={10}>
        <Toolbar>
          <Typography variant="h6">
            Register for Chat App of Adratahir
          </Typography>
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
              name="email"
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
            <TextField
              name="confirm-password"
              required
              style={styles.textField}
              label="Confirm Password"
              placeholder="Enter your password again"
              variant="outlined"
              type="password"
              {...bindConfirmPassword}
            />
          </Grid>
          <Grid item style={styles.gridItem}>
            <Button
              color="primary"
              variant="contained"
              style={styles.button}
              onClick={handleUserRegister}
            >
              Signup
            </Button>
          </Grid>
          <Grid item style={styles.loginButton}>
            <Link to="/login">
              <Button color="primary" variant="contained" style={styles.button}>
                Go to Login
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
  loginButton: { paddingTop: 5, paddingBottom: 12 },
  button: { width: 300 },
};

export default RegisterPage;
