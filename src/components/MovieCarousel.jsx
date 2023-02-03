import { Component } from "react";
import { Container /* Carousel */ } from "react-bootstrap";
import Movies from "./Movies";

class MovieCarousel extends Component {
  render() {
    return (
      <Container fluid>
        <h5 className="text-left">{this.props.moviesToShow}</h5>
        <Container fluid className="mt-sm-1 mt-md-2 mt-lg-3">
          {/* <Carousel>
            <Carousel.Item></Carousel.Item>
            <Carousel.Item></Carousel.Item>
            <Carousel.Item></Carousel.Item>
          </Carousel> */}
          <Movies moviesToShow={this.props.moviesToShow} />
        </Container>
      </Container>
    );
  }
}

export default MovieCarousel;
