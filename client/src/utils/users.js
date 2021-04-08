import axios from "axios";
import makeToast from "../toaster";

// axious call for login of user
export const loginUser = (props, username, password) => {
  axios
    .post("/login", {
      username,
      password,
    })
    .then((response) => {
      makeToast("success", response.data.message);
      localStorage.setItem("JWT_Token", response.data.token);
      props.history.push("/");
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast("error", err.response.data.message);
    });
};

// axious call for registering of user
export const registerUser = (props, username, password) => {
  axios
    .post("/users", {
      username,
      password,
    })
    .then((response) => {
      makeToast("success", response.data.message);
      localStorage.setItem("JWT_Token", response.data.token);
      props.history.push("/");
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast("error", err.response.data.message);
    });
};
