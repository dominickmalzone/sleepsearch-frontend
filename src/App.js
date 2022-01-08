
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import ResultPage from "./components/ResultPage";

function Layout() {
  return(
    <div className="search-layout">
      
      {/* whatever other page wrapper type stuff you need */}
      <SearchBar />
      {/* Outlet tells React Router where to render Home and CreateMeet */}
      <Outlet /> 
      
    </div>
  )
}


function App() {

  return (
    <div className="body">
      <Router>
        <Routes>
        <Route  element={<Layout />} >
          <Route path="/" index element={<Home />} />
          <Route path="/results" index element={<ResultPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
