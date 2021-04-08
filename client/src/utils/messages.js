import axios from "axios";
import makeToast from "../toaster";

// axious call of sending new message
export const sendMessage = (
  message,
  messages,
  setMessages,
  channelId,
  resetMessage
) => {
  const token = localStorage.getItem("JWT_Token");
  let headerConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  axios
    .post(
      "/messages/amazing-channel",
      {
        channel: channelId,
        message,
      },
      headerConfig
    )
    .then((response) => {
      resetMessage();
      setMessages([...messages, response.data]);
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast("error", err.response.data.message);
    });
};

// axious call fetching all messages
export const fetchAllMessages = (setMessages, messages) => {
  const token = localStorage.getItem("JWT_Token");
  let headerConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  axios
    .get("/messages/amazing-channel", headerConfig)
    .then((response) => {
      if (messages.length !== response.data.length) setMessages(response.data);
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast("error", err.response.data.message);
    });
};
