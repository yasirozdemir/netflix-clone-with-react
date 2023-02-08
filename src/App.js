import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import GenreBar from "./components/GenreBar";
import MovieCarousel from "./components/MovieCarousel";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<GenreBar />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<MovieCarousel moviesToShow="Sherlock Holmes" />}
          />
          <Route path="/tvshows" element={<h1>TV Shows</h1>} />
          <Route path="/moviedetails/:movieID" element={<MovieDetails />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<MovieCarousel moviesToShow="Harry Potter" />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<MovieCarousel moviesToShow="The Lord of the Rings" />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
