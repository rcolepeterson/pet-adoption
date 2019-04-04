import React from "react";
import PropTypes from "prop-types";
class ProfileForm extends React.Component {
  constructor(props) {
    super();
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      editText: props.name,
      editing: false
    };
  }

  handleEdit(e) {
    return e =>
      this.setState({
        editing: !this.state.editing
      });
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleKeyDown(e) {
    if (e.which === this.ENTER_KEY || e.which === this.ESCAPE_KEY) {
      this.setState({
        editing: false
      });
    }
  }

  render() {
    return (
      <>
        <textarea
          maxLength="300"
          key={this.props.editText}
          className="form-control"
          value={this.props.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </>
    );
  }
}
ProfileForm.propTypes = {
  onChange: PropTypes.func.isRequired
};
export default ProfileForm;
