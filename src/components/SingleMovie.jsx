import { Component } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

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
          <div>
            <h4>{this.props.movieObj.Title}</h4>
            <h6>{this.props.movieObj.Year}</h6>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            <button>
              {" "}
              <BsPlayFill />
            </button>
            <button className="ml-2">
              <AiOutlinePlus />
            </button>
            <button className="ml-2">
              <BiLike />
            </button>
            <button className="ml-auto">
              <FiChevronDown />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SingleMovie;
