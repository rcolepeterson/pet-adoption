import React from "react";
const PetProfile = ({ pet }) => {
  var { name, img, profile, age, sex, type } = pet;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img style={{ border: "solid 10px white" }} src={img} alt={name} />
      </div>
      <p>{profile}</p>
      <p>Type: {type}</p>
      <p>Age: {age}</p>
      <p>Sex: {sex}</p>
    </div>
  );
};

export default PetProfile;
