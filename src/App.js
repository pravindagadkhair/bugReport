import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Issue from "./components/issue";
import Assignments from "./components/assignments";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Home from "./components/home";
import CommunityHome from "./components/communityHome";
import ProjectHome from "./components/projectHome";
import SignupHome from "./components/signupHome";
import IssuesHome from "./components/issuesHome";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      {/* <CommunityHome /> */}
      {/* <Home />  *


      {/* <ProjectHome /> */}
      {/* <SignupHome /> */}
      {/* <IssuesHome /> */}
      {/* <Dashboard />  */}
      {/* <Navbar /> */}
      {/* <Assignments /> */}
      {/* <Login /> */}
      {/* <Issue /> */}
      {/* <Navbar /> */}

      <switch>
        <Route exact path="/login" component={Home} />
        <Route exact path="/register" component={SignupHome} />
        <Route exact path="/communityHome" component={CommunityHome} />
        <Route exact path="/issuesHome" component={IssuesHome} />
        <Route exact path="/projectHome" component={ProjectHome} />
      </switch>
    </>
  );
}

export default App;
