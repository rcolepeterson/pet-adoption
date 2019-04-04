import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import types from "../actions/types";
import SavedPetItem from "../components/SavedPetItem";
import "./Saved.css";

const NoPets = () => (
  <div>
    <p>No Save Pets</p>
    <p>
      <Link to="/search/">Click Here to see pets!</Link>
    </p>
  </div>
);

class Saved extends React.Component {
  renderCards() {
    return this.props.myPets.map(pet => {
      let props = { ...pet, ...{ removePet: this.props.removePet } };
      return <SavedPetItem key={pet.id} {...props} />;
    });
  }

  render() {
    return (
      <Layout>
        <h2>Saved</h2>
        {!this.props.myPets.length && <NoPets />}
        <div className="pets">
          <ul className="pet-list">
            {this.props.myPets && this.renderCards()}
          </ul>
        </div>
      </Layout>
    );
  }
}

Saved.propTypes = {
  myPets: PropTypes.array.isRequired,
  removePet: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    myPets: state.mypets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removePet: pet => {
      dispatch({ type: types.REMOVE_PET, payload: pet });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Saved);
