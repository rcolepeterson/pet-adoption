import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import "./Header.css";
import UserMessage from "./UserMessage";

const Header = ({ siteTitle = "Pets are cool", message = "" }) => (
  <header>
    <div>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      {message && <UserMessage message={message} />}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};
const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export const HeaderContainer = connect(mapStateToProps)(Header);
