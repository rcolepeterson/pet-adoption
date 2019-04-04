import React from "react";

class TileImage extends React.Component {
  /**
   * Creates a new TileImage instance
   */
  constructor() {
    super();
    this.imageRef = React.createRef();
    this.onImageLoad = this.onImageLoad.bind(this);
    this.state = { opacity: 0 };
  }

  /**
   * Hides the spinner and shows the main image
   *
   * @returns {void}
   */
  onImageLoad() {
    this.setState(() => {
      return { opacity: 1 };
    });
  }

  componentDidMount() {
    // get image ref
    const image = this.imageRef.current;
    if (image && image.complete) {
      this.onImageLoad();
    }
  }
  /**
   * Renders the Tile image
   *
   * @param {Object} props  - Properties set for this image
   * @param {Object} state  - Current state of this image
   * @returns {Component}   - TileImage component
   */
  render() {
    return (
      <div className="image_container">
        <img
          ref={this.imageRef}
          onLoad={event => this.onImageLoad(event)}
          style={{ opacity: this.state.opacity }}
          src={this.props.imageURL}
          alt={""}
        />
      </div>
    );
  }
}

export default TileImage;
