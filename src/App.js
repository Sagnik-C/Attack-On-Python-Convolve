import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import Plots from "./pages/plots/Dashboard";
import Predictions from "./pages/predictions/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Plots />}/>
        <Route path={"/predictions"} element={<Predictions />}/>
        <Route path={"/*"} element={<Plots />}/>
      </Routes>
    </Router>
  );
}

export default App;
