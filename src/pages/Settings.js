import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout.js";
import { connect } from "react-redux";
import AgeForm from "../components/AgeForm";
import { ToggleSwitchContainer } from "../components/ToggleSwitch";
import "./Settings.css";
import ProfileForm from "../components/ProfileForm";

class Settings extends Component {
  componentDidMount() {}
  onProfileChange = str => {
    this.props.setProfile(str);
  };
  onAgeChange = obj => {
    this.props.setAgeRange(obj);
  };
  render() {
    return (
      <Layout>
        <h2>Adopter Profile</h2>
        <h4>Profile</h4>
        <ProfileForm
          onChange={this.onProfileChange}
          name={this.props.profile}
          test={this.props.profile}
        />

        <h4>Animal Preference: {this.props.typePreference}</h4>

        <ToggleSwitchContainer />
        <h4>Age Preference</h4>
        <AgeForm
          minAge={this.props.ageRange.min}
          maxAge={this.props.ageRange.max}
          onChange={this.onAgeChange}
        />
      </Layout>
    );
  }
}

Settings.propTypes = {
  typePreference: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["cat", "dog"])
  ]),
  profile: PropTypes.string.isRequired,
  ageRange: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    typePreference: state.typePreference,
    profile: state.profile,
    ageRange: state.ageRange
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setProfile: str => {
      dispatch({ type: "SET_PROFILE", profile: str });
    },
    setAgeRange: ageRangeObject => {
      dispatch({ type: "SET_AGE_RANGE", ageRange: ageRangeObject });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
