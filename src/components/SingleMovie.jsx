import { Component } from "react";

class SingleMovie extends Component {
  render() {
    return (
      <>
        <img
          key={this.props.movieObj.imbdId}
          src={this.props.movieObj.Poster}
          alt="this.props.movieObj.Title"
          className="w-100 rounded-sm"
        />
      </>
    );
  }
}

export default SingleMovie;
