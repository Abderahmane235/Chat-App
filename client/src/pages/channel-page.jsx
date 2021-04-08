import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { useInput } from "../components/useInput";
import { fetchAllMessages, sendMessage } from "../utils/messages";
import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  List,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import LogoutButton from "../components/logout-button";
import ChatItem from "../components/chat-item.com";

const ChannelPage = ({ match }) => {
  const channelId = match.params.id;
  const token = localStorage.getItem("JWT_Token");
  const userId = JSON.parse(atob(token.split(".")[1]))._id;
  const [messages, setMessages] = useState([]);
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );
  const scrollDiv = useRef(null);

  // this is calling sendMessage axious call to post new message
  const handleSendMessage = () => {
    sendMessage(message, messages, setMessages, channelId, resetMessage);
  };

  // method to scroll user view to latest message
  const scrollToBottom = () => {
    const scrollHeight = scrollDiv.current.scrollHeight;
    const height = scrollDiv.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    scrollDiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetchAllMessages(setMessages, messages);
  }, []);

  // This hook is checking for new messages after specific intervals.
  useEffect(() => {
    let interval = setInterval(
      () => fetchAllMessages(setMessages, messages),
      3000
    );
    //destroy interval on unmount
    return () => clearInterval(interval);
  });

  return (
    <Container component="main" maxWidth="md">
      <AppBar elevation={10}>
        <Toolbar style={styles.header}>
          <Link to="/signup" style={styles.logo}>
            <Typography variant="h6">Homepage</Typography>
          </Link>
          <Typography>Amazing Channel</Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <CssBaseline />

      <Grid container direction="column" style={styles.mainGrid}>
        <Grid item style={styles.gridItemChatList} ref={scrollDiv}>
          <List dense={true}>
            {messages.map((message) => (
              <ChatItem key={message._id} message={message} userId={userId} />
            ))}
          </List>
        </Grid>

        <Grid item style={styles.gridItemMessage}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={styles.textFieldContainer}>
              <TextField
                required
                style={styles.textField}
                placeholder="Enter message"
                variant="outlined"
                multiline
                rows={2}
                {...bindMessage}
              />
            </Grid>

            <Grid item>
              <IconButton style={styles.sendButton} onClick={handleSendMessage}>
                <Send style={styles.sendIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const styles = {
  textField: { width: "100%", borderWidth: 0, borderColor: "transparent" },
  textFieldContainer: { flex: 1, marginRight: 12 },
  gridItem: { paddingTop: 12, paddingBottom: 12 },
  gridItemChatList: { overflow: "auto", height: "70vh" },
  gridItemMessage: { marginTop: 12, marginBottom: 12 },
  sendButton: { backgroundColor: "#3f51b5" },
  sendIcon: { color: "white" },
  mainGrid: { paddingTop: 100, borderWidth: 1 },
  header: { display: "flex" },
  logo: { width: "20%", color: "#fff" },
};

export default withRouter(ChannelPage);
