import React from "react";
import { Link } from "react-router-dom";
import Dotdotdot from "react-dotdotdot";
const SavedPetItem = ({ id, age, sex, img, name, profile, removePet }) => {
  let petInfo = `${name}, ${age}yr, ${sex}`;
  return (
    <li className="pet-item cf" key={id}>
      <div className="pet-details">
        <Link to={`/profile/${id}`}>
          <div className="avatar-holder">
            <img
              alt=""
              className="avatar"
              style={{
                backgroundImage: `url(
            ${img}
          )`
              }}
            />
          </div>
          <h3>{petInfo}</h3>
          <Dotdotdot clamp={2}>
            <p>{profile}</p>
          </Dotdotdot>
        </Link>
        <div />
      </div>
      <div className="delete-btn" onClick={() => removePet({ id })}>
        &times;
      </div>
    </li>
  );
};

export default SavedPetItem;
