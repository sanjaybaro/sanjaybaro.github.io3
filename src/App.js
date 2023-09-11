import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
