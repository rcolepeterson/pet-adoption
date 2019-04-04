import React from "react";
import { connect } from "react-redux";
import types from "../actions/types";
import PropTypes from "prop-types";
import "./ToggleSwitch.css";
const ToggleSwitch = ({ animalPreference, checked }) => {
  const onToggleSwitchChange = () => {
    animalPreference(!checked ? "dog" : "cat");
  };

  return (
    <div className="toggle-switch toggle-switch-rounded">
      <div className="toggle-switch-wrapper">
        <div
          className={`slider ${checked && "isChecked"}`}
          onClick={onToggleSwitchChange}
        />
      </div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  animalPreference: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { typePreference } = state;
  return { checked: typePreference === "dog" ? true : false };
};
const mapDispatchToProps = dispatch => ({
  animalPreference: animal => {
    dispatch({ type: types.SET_ANIMAL_PREFERENCE, typePreference: animal });
  }
});

export const ToggleSwitchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleSwitch);
