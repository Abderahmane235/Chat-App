import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import LoginPage from "./pages/login-page.com";
import RegisterPage from "./pages/register-page.com";
import DashboardPage from "./pages/dashboard-page.com";
import ChannelPage from "./pages/channel-page";
import ProtectedRoute from "./components/protected-route";
import NonProtectedRoute from "./components/non-protected-route";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" component={DashboardPage} exact />
        <ProtectedRoute path="/channels/:id" component={ChannelPage} exact />
        <NonProtectedRoute path="/login" component={LoginPage} exact />
        <NonProtectedRoute path="/signup" component={RegisterPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
