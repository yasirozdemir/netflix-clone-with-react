import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import GenreBar from "./components/GenreBar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <GenreBar />{" "}
    </div>
  );
}

export default App;
