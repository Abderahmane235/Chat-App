import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LogoutButton from "../components/logout-button";
const DashboardPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <AppBar elevation={10}>
        <Toolbar style={styles.header}>
          <Typography variant="h6">
            {`Welcome to Chat App of Adratahir`}
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>

      <CssBaseline />
      <div className="cardDashboard">
        <div className="cardHeader">Channels List</div>
        <div className="cardBody">
          <div className="inputGroup">
            <label htmlFor="channelName">Channel Name</label>
            <input
              type="text"
              name="channelName"
              id="channelName"
              placeholder="Enter New Channel Name"
              disabled
            />
          </div>
        </div>
        <button disabled>Create channel</button>
        <div className="channels">
          <div className="channel">
            <div>Amazing Channel</div>
            <Link to={"/channels/amazing-channel"}>
              <div className="join">Join</div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

const styles = {
  header: { display: "flex" },
};

export default DashboardPage;
