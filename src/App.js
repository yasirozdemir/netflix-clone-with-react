import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import GenreBar from "./components/GenreBar";
import MovieCarousel from "./components/MovieCarousel";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <GenreBar />
        <Routes>
          <Route
            path="/"
            element={<MovieCarousel moviesToShow="Sherlock Holmes" />}
          />
          {/* <MovieCarousel moviesToShow="Harry Potter" />
      <MovieCarousel moviesToShow="The Lord of the Rings" /> */}
          <Route path="/tvshows" element={<h1>tvshows</h1>} />
          <Route
            path="/moviedetails/:movieID"
            element={<h1>moviedetails</h1>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
