import React from "react";
import Layout from "../components/Layout";
import PetProfile from "../components/PetProfile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Profile = ({ pet }) => {
  return <Layout>{pet && <PetProfile pet={pet} />}</Layout>;
};
const mapStateToProps = (state, ownProps) => {
  let selPet = state.pets.filter(
    pet => pet.id === Number(ownProps.match.params.id)
  );

  return {
    pet: selPet.length > 0 ? selPet[0] : {}
  };
};

Profile.propTypes = {
  pet: PropTypes.object.isRequired
};

export const ProfileContainer = connect(mapStateToProps)(Profile);
