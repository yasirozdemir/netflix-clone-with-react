import { Component } from "react";

class SingleMovie extends Component {
  render() {
    return (
      <>
        <img
          key={this.props.movieObj.imbdId}
          src={this.props.movieObj.Poster}
          alt={this.props.movieObj.Title}
          className="w-100 rounded-sm"
        />
        <div className="overlay d-flex flex-column justify-content-between">
          <h6>{this.props.movieObj.Title}</h6>
          <div className="d-flex align-items-center justify-content-start">
            <button></button>
            <button className="ml-2"></button>
            <button className="ml-2"></button>
            <button className="ml-auto"></button>
          </div>
        </div>
      </>
    );
  }
}

export default SingleMovie;
