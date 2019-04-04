import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout.js";
import { connect } from "react-redux";
import { Card, CardWrapper } from "react-swipeable-cards";
import SearchPetProfile from "../components/SearchPetProfile";
import "./Search.css";
import types from "../actions/types";

// Create custom end card
const MyEndCard = () => (
  <div>
    <h4>You Finished Swiping! Check your saved pets or refresh.</h4>
  </div>
);

class Search extends Component {
  onSwipeRight(data) {
    this.props.savePet(data);
  }
  onSwipeLeft(data) {}

  getEndCard() {
    return <MyEndCard />;
  }

  renderCards() {
    let mypets = this.props.mypets.map(pet => pet.id);
    let data = this.props.pets.filter(
      pet => pet.type === this.props.typePreference && !mypets.includes(pet.id)
    );
    return data.map(d => {
      let petInfo = `${d.name}, ${d.age}yr, ${d.sex}`;
      return (
        <Card
          data={d}
          className="card"
          key={d.id}
          onSwipeRight={this.onSwipeRight.bind(this)}
          onSwipeLeft={this.onSwipeLeft.bind(this)}
        >
          <img
            className="cardImage"
            draggable="false"
            alt={d.name}
            src={d.img}
            width="200"
          />
          <SearchPetProfile petInfo={petInfo} profile={d.profile} />
        </Card>
      );
    });
  }
  render() {
    return (
      <Layout>
        <CardWrapper addEndCard={this.getEndCard.bind(this)}>
          {this.renderCards()}
        </CardWrapper>
        <p className="search-instructions">
          Swipe right to save or Swipe left to see next Pet.
        </p>
      </Layout>
    );
  }
}

Search.propTypes = {
  pets: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    pets: state.pets,
    typePreference: state.typePreference,
    mypets: state.mypets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savePet: pet => {
      dispatch({ type: types.SAVE_PET, payload: pet });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
