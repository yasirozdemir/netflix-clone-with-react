import { Component } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

class GenreBar extends Component {
  render() {
    return (
      <div className="container-fluid align-items-center d-none d-lg-flex">
        <h2>TV Shows</h2>
        <DropdownButton
          className="ml-2"
          alignLeft
          title="Movies"
          id="genreDropdown"
        >
          <Dropdown.Item eventKey="1">Harry Potter</Dropdown.Item>
          <Dropdown.Item eventKey="2">Sherlock Holmes</Dropdown.Item>
          <Dropdown.Item eventKey="3">The Lord of the Rings</Dropdown.Item>
        </DropdownButton>

        <div className="ml-auto">
          <Button className="px-3" variant="outline-light">
            icon1
          </Button>
          <Button className="ml-1 px-3" variant="outline-light">
            icon2
          </Button>
        </div>
      </div>
    );
  }
}

export default GenreBar;
