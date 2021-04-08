import React from "react";
import { ListItem } from "@material-ui/core";

const ChatItem = ({ message, userId }) => {
  const isOwnMessage = message.author._id === userId;

  return (
    <ListItem style={styles.listItem(isOwnMessage)}>
      <div style={styles.author}>{message.author.username}</div>
      <div style={styles.container(isOwnMessage)}>
        {message.message}
        <div style={styles.timestamp}>
          {new Date(message.createdAt).toLocaleString()}
        </div>
      </div>
    </ListItem>
  );
};

const styles = {
  listItem: (isOwnMessage) => ({
    flexDirection: "column",
    alignItems: isOwnMessage ? "flex-end" : "flex-start",
  }),
  container: (isOwnMessage) => ({
    maxWidth: "40vw",
    borderRadius: 12,
    padding: 16,
    color: "white",
    fontSize: 16,
    wordWrap: "break-word",
    backgroundColor: isOwnMessage ? "#054740" : "#262d31",
  }),
  author: { fontSize: 10, color: "gray" },
  timestamp: { fontSize: 8, color: "white", textAlign: "right", paddingTop: 4 },
};

export default ChatItem;
