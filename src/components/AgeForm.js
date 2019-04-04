import React from "react";
import PropTypes from "prop-types";
const AgeForm = ({ onChange, minAge = 0, maxAge = 100 }) => {
  let minInput = React.createRef();
  let maxInput = React.createRef();

  const updateFormData = () => {
    onChange({ min: minInput.current.value, max: maxInput.current.value });
  };

  return (
    <form>
      <input
        ref={minInput}
        value={minAge}
        onChange={e => updateFormData(e)}
        placeholder="Min"
        type="number"
        name="min"
        required
        style={{ marginBottom: 10 }}
        className={"form-control"}
      />

      <input
        value={maxAge}
        ref={maxInput}
        onChange={e => updateFormData(e)}
        placeholder="Max"
        type="number"
        name="max"
        className={"form-control"}
        required
      />
    </form>
  );
};

AgeForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  minAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default AgeForm;
