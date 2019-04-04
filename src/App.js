import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Saved = lazy(() => import("./pages/Saved"));
const Search = lazy(() => import("./pages/Search"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/ProfileWrapper"));

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/settings/" component={Settings} />
          <Route path="/search/" component={Search} />
          <Route path="/saved/" component={Saved} />
          <Route path="/profile/:id" component={Profile} />
        </React.Fragment>
      </Suspense>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
