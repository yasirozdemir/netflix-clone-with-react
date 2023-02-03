import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class Movies extends Component {
  state = {
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=83cb8cba&s=",
    nameOfMoviesToShow: this.props.moviesToShow,
    movies: [],
    isError: false,
    isLoading: true,
  };

  getMovies = async () => {
    try {
      const response = await fetch(
        this.state.url + this.state.nameOfMoviesToShow,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const moviesDataRaw = await response.json();
        const moviesData = moviesDataRaw.Search;

        this.setState({
          ...this.state,
          movies: moviesData,
          isLoading: false,
        });
      } else {
        console.error("error");
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error(error);
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Row className="no-gutters">
        {this.state.movies.map((movieObj) => {
          return (
            <Col className="mx-1">
              <SingleMovie key={movieObj.imdbID} movieObj={movieObj} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Movies;
