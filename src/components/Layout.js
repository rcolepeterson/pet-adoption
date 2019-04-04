import React from "react";
import Navigation from "./Navigation";
import { HeaderContainer } from "./Header";
import "./Layout.css";
import { SITE_TITLE } from "../constants";
import PropTypes from "prop-types";
const Layout = ({ children }) => (
  <div>
    <HeaderContainer siteTitle={SITE_TITLE} />
    <div className="layout">{children}</div>
    <Navigation />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Layout;
