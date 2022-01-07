import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
