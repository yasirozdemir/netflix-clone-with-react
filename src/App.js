import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import GenreBar from "./components/GenreBar";
import MovieCarousel from "./components/MovieCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <GenreBar />
      <MovieCarousel moviesToShow="Sherlock Holmes" />
      <Footer />
    </div>
  );
}

export default App;
