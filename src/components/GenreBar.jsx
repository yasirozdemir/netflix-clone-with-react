import { Component } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

class GenreBar extends Component {
  render() {
    return (
      <div className="container-fluid align-items-center d-none d-lg-flex">
        <h2>TV Shows</h2>
        <DropdownButton className="ml-2" title="Movies" id="genreDropdown">
          <Dropdown.Item eventKey="1">Harry Potter</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sherlock Holmes</Dropdown.Item>
          <Dropdown.Item eventKey="3">The Lord of the Rings</Dropdown.Item>
        </DropdownButton>

        <div className="ml-auto">
          <Button
            className="px-3 d-inline-flex justify-content-center align-items-center"
            variant="outline-light"
          >
            <FaAlignJustify />
          </Button>
          <Button
            className="ml-1 px-3  d-inline-flex justify-content-center align-items-center"
            variant="outline-light"
          >
            <MdLocalMovies />
          </Button>
        </div>
      </div>
    );
  }
}

export default GenreBar;
