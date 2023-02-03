import { Component } from "react";
import { Carousel } from "react-bootstrap";

class MoviesAsCarouselItem extends Component {
  state = {
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=83cb8cba&s=",
    moviesToShow: this.props.moviesToShow,
    movies: [],
    isError: false,
    isLoading: true,
    startIndex: this.props.startIndex,
    endIndex: this.props.endIndex,
  };

  getMovies = async () => {
    try {
      const response = await fetch(this.state.url + this.state.moviesToShow, {
        method: "GET",
      });
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
      <Carousel>
        {this.state.movies.map((movieObj) => {
          return (
            <Carousel.Item key={movieObj.imdbID}>
              <img src={movieObj.Poster} alt={movieObj.Title} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default MoviesAsCarouselItem;
