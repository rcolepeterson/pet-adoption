import React, { useState } from "react";
export default ({ petInfo, profile }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <h4>
        {petInfo}
        <div style={{ marginTop: 5 }} onClick={() => setHidden(false)}>
          Click here to see profile
        </div>
      </h4>

      <div
        className={
          hidden
            ? "search-instructions-pet-profile hide-profile"
            : "search-instructions-pet-profile show-profile"
        }
      >
        <div
          style={{ right: 10 }}
          className="delete-btn"
          onClick={() => setHidden(true)}
        >
          &times;
        </div>
        <p style={{ width: "90%" }}>{profile}</p>
      </div>
    </>
  );
};
